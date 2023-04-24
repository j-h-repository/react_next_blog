import Page from "../../template/template";
import PostView from "../../../components/cards/postView";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { getPost } from "../../../Functions/post";
const CustomId = () => {

const router = useRouter();
const [post, setPost] = useState("")




const getAPost = async () => {
    try{
      const seek =(window.location.pathname).split("/")
      const find = seek[seek.length-1]
      console.log(find)
      const data= await getPost(find);
      setPost(data)
    } catch(err){
        console.log(err)
    }
}

useEffect(()=>{
  
  if(!post){
    console.log("run")
    getAPost();
  }
 setPost(post)
},[post])

console.log(post)
  return (
    
    <Page>
      <PostView title={post.title} text={post.content}/>
    </Page>
  );
};

export default CustomId;
