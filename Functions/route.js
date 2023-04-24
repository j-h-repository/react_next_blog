import useRouter from "next/router"
import { UserContext } from "../context";
import { useContext } from "react";




export const route = (e,div)=>{
    e.preventDefault();
    
    useRouter.push(`${div}`)
}

export const postPage=(page)=>{
    useRouter.push(`/posts/post/${page}`)
}

export const postEdit = (page)=>{
    useRouter.push(`/edit/${page}`)
}

