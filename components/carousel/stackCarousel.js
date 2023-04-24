import PhotoCard from "../cards/photo_card"

const StackCarousel = ()=>{
    return (
        <div className="car">
           
            <div className="p-2"><PhotoCard image={"/images/techStack/html.png"} text={"HTML"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/css.png"} text={"CSS"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/javascript.png"} text={"Javascript"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/node.png"} text={"Node.js"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/react.png"} text={"React.js"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/next.png"} text={"Next.js"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/express.png"} text={"Express.js"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/mongo.png"} text={"MongoDB"}/></div>
            <div className="p-2"><PhotoCard image={"/images/techStack/github.png"} text={"Github"}/></div>
        </div>
    )
}

export default StackCarousel