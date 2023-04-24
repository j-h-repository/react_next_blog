import axios, { isAxiosError } from "axios";

//make a "delete" and "edit" post function


export const submitPost = async (u,cat,content, t, k)=>{

    if(cat){
        if(content !== "<p></br></p>"){
            try { 
                const {data} = await axios.post(`/create-post`, {
                    u, cat, content, t, k
                });
                if(data.good){
                    return {data}
                }
                
            } catch (err){
                console.log(err)
            }
        } else{
            console.log("please submit content");
        } 
    } else{
        console.log("please choose a category")
    }
    
}

export const fpPosts = async()=>{
   
    try{
        
        const {data} = await axios.get("/fp-post");
      
        return data
        
    } catch(err){
        console.log(err)
    }
}

export const techPosts = async()=>{
   console.log("sending")
    try{
        
        const {data} = await axios.get("/tech-post");
        console.log(data)
      
        return data
        
    } catch(err){
        console.log(err)
    }
}

export const historyPosts = async()=>{
   
    try{
        
        const {data} = await axios.get("/history-post");
      
        return data
        
    } catch(err){
        console.log(err)
    }
}

export const findEdit = (t) =>{
    
        if(t =="history"){
            return historyPosts();
        } else if (t=="tech" ){
            return techPosts();
        } else if (t =="fp"){
            return fpPosts();
        }
}

export const deleteItems = async (items)=>{
    // const list = []
    // for(let i=0; i<items.length; i++){
    //     if(items[i].firstChild.checked == true){
    //         list.push(items[i].id)
    //     }
    //    }
    console.log(items)
    try{
        const {data} = await axios.post("/delete-post", items);
        return data
    } catch(err){
        console.log(err)
    }
}


export const getPost = async (id)=>{
    try{
        const {data} = await axios.get(`/one-post/${id}`);
        return data
    }catch(err){
        console.log(err)
    }
}


export const submitEdit = async (pid,cat,content, t, k)=>{

    if(cat){
        if(content !== "<p></br></p>"){
            try { 
                const {data} = await axios.put(`/edit-post`, {
                    pid,cat, content, t, k
                });
                if(data.good){
                    return {data}
                }
                
            } catch (err){
                console.log(err)
            }
        } else{
            console.log("please submit content");
        } 
    } else{
        console.log("please choose a category")
    }
    
}