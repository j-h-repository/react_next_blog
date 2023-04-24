import Create from "../components/form/createPost";
import Page from "./template/template";
import UserRoute from "../userRoute/userRoute"
import { submitPost } from "../Functions/post";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context";


const CreatePost = () => {

//requires all the fields when editing, and the corresponding functions
  //add a variable to the global context so the server knows that you are submitting a new post, not updating

  const router = useRouter();
    const [category, setCateg] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [keyw, setKeyW] = useState("")
    const {state} = useContext(UserContext);

    useEffect(()=>{
         setCateg(category);
         setContent(content);
         setTitle(title);
         setKeyW(keyw)  
     }, [])

    const postSubmit = async (e) =>{
        e.preventDefault();

       try{
            const {data} = await submitPost(state && state.user._id,category,content,title, keyw);
            console.log(data)
            if(!data){
                console.log("post failed. please try again")
            } else{
                router.push("/test")
            }
       } catch(err){
        console.log(err)
       } }

  return (
    <UserRoute>
      <Page>
        <Create category={category} setCategory={setCateg} content={content} setContent={setContent} title={title} setTitle={setTitle} keywords={keyw} setKeywords={setKeyW} handleSubmit={postSubmit}/>
      </Page>
    </UserRoute>
      
  
  );
};

export default CreatePost;
