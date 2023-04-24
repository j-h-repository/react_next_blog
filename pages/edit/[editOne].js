import Create from "../../components/form/createPost";
import Page from "../template/template";
import UserRoute from "../../userRoute/userRoute"
import { submitEdit } from "../../Functions/post";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context";
import { getPost } from "../../Functions/post";


const Write = () => {
    const router = useRouter();
    const [post, setPost] = useState("")
    const [category, setCateg] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [keyw, setKeyW] = useState("")
    const [page, setPage] = useState("")


    const getAPost = async () => {
      try{
        const seek =(window.location.pathname).split("/")
        const find = seek[seek.length-1]
        setPage(find)
        console.log("find: ",find)
        const data= await getPost(find);
        setPost(data);
       
       
      } catch(err){
          console.log(err)
      }
  }

    useEffect(()=>{
    
      if(!post){
        getAPost()
        
        console.log("post: ", post)
      } 
      setCateg(post.category);
      setContent(post.content)
      setTitle(post.title)
      setKeyW(post.keywords)
      }, [post])

    const postSubmit = async (e) =>{
        e.preventDefault();

       try{
            const {data} = await submitEdit(page,category,content,title,keyw);
            console.log(data)
            if(!data){
                console.log("post failed. please try again")
            } else{
                router.push("/test")
            }
       } catch(err){
        console.log(err)
       } }

  //all states related to the post content, and the needed functions for updating
  //add a variable to the global context so the server knows that you are updating, not submitting a new post

  return (
    <UserRoute>
      <Page>
      <Create category={category} setCategory={setCateg} content={content} setContent={setContent} title={title} setTitle={setTitle} keywords={keyw} setKeywords={setKeyW} handleSubmit={postSubmit}/>
      </Page>
    </UserRoute>
  );
};

export default Write;
