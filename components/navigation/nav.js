
import { useRouter } from "next/router"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../context"
import {route} from "../../Functions/route"


const Nav = () =>{
    const router = useRouter();
    const [path, setPath] = useState("");
    const {state, setState} = useContext(UserContext);

    

    const logOut = async()=>{

        await setState(null);
        router.push("/sign-in");
        window.localStorage.removeItem("auth");
}
    useEffect(()=>{

       process.browser && setPath(location.pathname);
        console.log(path)

    }, [process.browser && location.pathname])

    return (
        <div className="navigation">
            <div path="/" onClick={(e)=>{route(e,e.target.getAttribute("path"))}}>
                Home
            </div>
            <div className="inner-nav" hidden={state}>
               
               <div path="/features" onClick={(e)=>{route(e,e.target.getAttribute("path"))}}>
                    Features
               </div>
               <div path="/static/bio" onClick={(e)=>{route(e,e.target.getAttribute("path"))}}>
                    Bio
               </div>
               <div path="/contact" onClick={(e)=>{route(e,e.target.getAttribute("path"))}}>
                    Contact
               </div>
               
            </div>
            <div className="inner-nav" hidden={!state}>
               
               <div path="/test" onClick={(e)=>{route(e,e.target.getAttribute("path"))}} >
                    Dash
               </div>
               
            </div>
            <div path="/sign-in" onClick={(e)=>{route(e,e.target.getAttribute("path"))}} hidden={state || path == "/sign-in" }>
                Sign In
            </div>
            <div path="/sign-up" onClick={(e)=>{route(e,e.target.getAttribute("path"))}} hidden={state || path!=="/sign-in" }>
                Sign Up
            </div>
            <div path="/sign-in" onClick={()=>{logOut()}} hidden={!state}>
                Logout
            </div>
        </div>
    )
}

export default Nav