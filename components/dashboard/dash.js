import PhotoCard from "../cards/photo_card"
import { route } from "../../Functions/route"



const Dash = () =>{



    return (
        
        <div className="justify-content-center">
            <div className="light-text onDisplay">
                    What do you want to do?
            </div>
            <div className="row">
                
                <div className="col-lg-4" path="/create"  onClick={(e)=>route(e,e.target.parentNode.parentNode.parentNode.getAttribute("path"))}>
                    <PhotoCard image={"/images/add.png"} text={"New post"} />
                </div>
                
                <div className="col-lg-4" path="edit" onClick={(e)=>route(e,e.target.parentNode.parentNode.parentNode.getAttribute("path"))}>
                    <PhotoCard image={"/images/edit.png"} text={"Edit post"}/>
                </div>
            
                <div className="col-lg-4">
                    <PhotoCard image={"/images/gear.png"} text={"Settings"}/>
                </div>
                
            </div>
        </div>
     
        
       
       
    )
}

export default Dash