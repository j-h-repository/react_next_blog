
import { useEffect } from "react";
const PostView = ({ text, title, author }) => {



  return (
    <div className="post-view" id="main-view">
      <div className="onDisplay dark-text">{title}</div>
      <div className="body-text dark-text" dangerouslySetInnerHTML={{__html:text}}></div>
      <div className="body-text dark-text">{author}</div>
    </div>
  );
};

export default PostView;
