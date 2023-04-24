import Page from "../template/template";
import { useState, useEffect, useContext } from "react";
import { historyPosts } from "../../Functions/post";
import Card from "../../components/cards/card";
import { postPage } from "../../Functions/route";
import { UserContext } from "../../context";

const History = ()=>{

    const [posts, setPosts] = useState([])
    const {setPage} = useContext(UserContext)

    const getPost = async ()=>{
        const data = await historyPosts();
        console.log(data)
        setPosts(data)
    }

    useEffect(()=>{
            getPost();
    }, [])

    

    return !posts ? (
    
        <Page>
          waiting for posts
        </Page>
      ) : (
        <Page>
          <div className="row justify-content-around">
          {posts && posts.map((p)=>{
            return(
                <div key={p._id} className="col-lg-4 py-4" onClick={()=>{postPage(p._id); setPage(p._id)}}>

                  <Card title={p.title} author={p.createdBy.username} keyw={p.keywords}/>
                   
                </div>
            )
           })}
          </div>
          
        </Page>
      );

}

export default History