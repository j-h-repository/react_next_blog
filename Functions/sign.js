import axios from "axios"; 



export const signUp = async (one,two,three)=>{

    console.log(one,two,three)
    
    if(one !== two){
        return (console.log("passwords must match"))
    } else{
       
        try{ const {data} =  await axios.post(`${process.env.NEXT_PUBLIC_API}/sign-up`, {
            one,three
        })
            if(data && data.ok){
                console.log("user created");
                return true
            }else{
                const error =data &&  data.error;
                console.log(error)
                return error;
            }
        } catch(err){
            console.log(data && data)
        }
    }
}

export const signIn = async (one,two)=>{
   
        try{ const {data} =  await axios.post(`/sign-in`, {
            one,two
        })
            if(data && data.user && data.token){
                console.log("data==> ",data)
                return {data:data, "good":true}
                
            }else{
                const error = data &&  data.error;
                console.log(error)
                return error;
            }
        } catch(err){
            console.log(data && data)
        }
    
}

