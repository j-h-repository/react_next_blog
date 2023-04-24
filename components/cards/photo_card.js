

const PhotoCard = ({image, text})=>{
    return (
  
<div className="card">
  <div className="card-image-area" >
    <img src={image}/>
  </div>
  
  <div className="card-body ">
    <p className="card-text heading">
     {text}
    </p>
  </div>
</div>



    );
}

export default PhotoCard;