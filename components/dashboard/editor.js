import { useEffect, useState, useContext } from "react";
import { findEdit } from "../../Functions/post";
import Card from "../cards/card";
import { deleteItems } from "../../Functions/post";
import { UserContext } from "../../context";
import { postEdit } from "../../Functions/route";
const Editor = () => {
  const [active, setActive] = useState("");
  const [pChoice, setPChoice] = useState([]);
  const [del, setDel] = useState([]);
  const {setPage} = useContext(UserContext)

  useEffect(() => {
    setPChoice(pChoice);
    setActive(active);
    setDel(del)
    console.log(del)
  }, [pChoice, active,del]);

  const addDel = () => {

    const delBut = document.getElementById("delete")
    const l = []
    
    let here =  document.querySelectorAll("div[name='post-prev']");
    for(let i=0; i<here.length; i++){
      if(!l.includes(pChoice[here[i].accessKey]._id)){
        if(here[i].firstChild.checked == true){
         l.push(pChoice[here[i].accessKey]._id)
         setDel(l)
        }
      }
      
    }

    if(l.length<1){
      setDel(l)
    }
    
    if(l.length>=1){
      delBut.disabled=false
    } else{
      delBut.disabled=true
    }
  };

  const listDel = async (e)=>{
  
   console.log(del)
    e.preventDefault()
    try{
        const data = await deleteItems(del);
        if(data.good){
            console.log("got a good response")
            findPosts(e,active)
        }
    } catch(err){
        console.log(err)
    } 
    console.log(del)
  }

  const listClear = ()=>{
    let here =  document.querySelectorAll("div[name='post-prev']");
    
    for(let i=0; i<here.length; i++){
     if(here[i].firstChild.checked == true){
         (here[i].firstChild.checked = false)
        setDel([])
     }
    }
    setDel([]);
    console.log(del)
   }

  const findPosts = async (e, topic) => {
   
    setDel([]);
    e.preventDefault()
    try {
      const data = await findEdit(topic);
      setPChoice(data);
      setActive(topic);
      
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div>
      {/* a row containing the topics that can switch post views*/}
      <div className="row justify-content-between">
        <div
          className="col-md-4 edit-item"
          onClick={(e) => {
            findPosts(e, e.target.id);
          }}
        >
          <div id="tech">Tech</div>
          {/* add a box that is the width of the word and brightens on hover*/}
          <div className="box"></div>
        </div>
        <div
          className="col-md-4 edit-item"
          onClick={(e) => {
            findPosts(e, e.target.id);
          }}
        >
          <div id="fp">Foreign Policy</div>
          {/* add a box that is the width of the word and brightens on hover*/}
          <div className="box"></div>
        </div>
        <div
          className="col-md-4 edit-item"
          onClick={(e) => {
            findPosts(e, e.target.id);
          }}
        >
          <div id="history">History</div>
          {/* add a box that is the width of the word and brightens on hover*/}
          <div className="box"></div>
        </div>

        {/* a delete button that appears when a checkbox is selected*/}
      </div>
      <hr />
      <div className="row main-in">
        {!active ? (
          <>Please choose a topic</>
        ) : (
          <>
            <div className="row">
              <div className="heading col-md-6">
                {active}
              </div>
              <div className="heading col-md-6 text-end">
                <button className="btn light-button" onClick={()=>listClear()}> Clear</button>

                <button id="delete" className="btn light-button" onClick={(e)=>{listDel(e)}}>Delete</button>
              </div>
            </div>

            {
            pChoice&&
            pChoice.length>0 ?
              pChoice.map((p,i) => {
                return (
                  <div  name="post-prev"className="col-lg-4 p-4" key={i} accessKey={i} >
                    <input type="checkbox" onChange={()=>{addDel()}}/>
                   <div  onClick={(e)=>{setPage(p._id);postEdit(p._id);console.log(e)}}>
                   <Card
                    
                    id={p._id}
                     title={p.title}
                     author={!p.createdBy ? "" : p.createdBy.username}
                   />
                   </div>
                   
                  </div>
                );
              })
              :
              <div>
                There are no posts for this category at the moment
              </div>
              }
          </>
        )}
      </div>
    </div>
  );
};
export default Editor;
