import { useContext, useState } from "react"
import { UserContext } from "../../context"


const Page = ({children})=>{
    
    const {disp} = useContext(UserContext);

    return (
        <div className={`${disp}`} id="template">
           {children}
        </div>
    )
}

export default Page