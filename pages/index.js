import { useEffect } from "react";
import { route } from "../Functions/route";
import PhotoCard from "../components/cards/photo_card";
import Page from "./template/template";

// import { findElement } from "../Functions/test"

const Home = () => {



  return (
    <Page>
      <div className="row light-text" id="intro">
        <div className="onDisplay text-center">
          Direction: all that's needed for the journey
        </div>
        <div className=" body-text light-text">
           Without an end-goal in mind, your journey may seem meaningless. Let's help you define your end goal
        </div>
       
      </div>
      <div id="content" className="justify-content-center">
        <div className="row">
        
        
        </div>
        <div className="row p-3">
          <div className="col-lg-4 p-3 touch" path="/posts/tech" onClick={(e)=>{route(e,e.target.parentNode.parentNode.parentNode.getAttribute("path"))}}>
          <PhotoCard image={"/images/code.png"} text={"Tech"} />
          </div>
          <div className="col-lg-4  p-3" path="/posts/fp" onClick={(e)=>{route(e,e.target.parentNode.parentNode.parentNode.getAttribute("path"))}}>
          <PhotoCard image={"/images/forpol.png"} text={"Foreign Policy"} />
          </div>
          <div className="col-lg-4  p-3" path="/posts/history" onClick={(e)=>{route(e,e.target.parentNode.parentNode.parentNode.getAttribute("path"))}}>
          <PhotoCard image={"/images/history.png"} text={"History"} />
          </div>
           
        </div>
        
        <div className="row "></div>
      </div>
    </Page>
  );
};

export default Home;
