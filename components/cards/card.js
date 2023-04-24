

const Card = ({title,author, keyw})=>{
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{!title?"Post":title}</h5>
          <p className="card-subtitle mb-2 text-muted">Written by: {!author?"Anon":author}</p>
          <h5 className="card-text" hidden={!keyw}>
            Key words: {keyw}
          </h5>
         
        </div>
      </div>
    );
}

export default Card