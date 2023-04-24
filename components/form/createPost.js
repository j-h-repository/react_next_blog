
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import "react-quill/dist/quill.snow.css"


const Create = ({title, category, content, keywords, setTitle, setCategory, setContent, setKeywords, handleSubmit})=>{
    
   

    
 

    
    return (
      <div className="text-center creating">
        <form>

            <div className="form-group">
                <label>Category</label>
                <select className="form-control text-center" type="text"  onChange={(e)=>{setCategory(e.target.value)}} value={category}>
                    <option value="null">
                        Select a category
                    </option>
                    <option value="fp">
                        Foreign Policy
                    </option>
                    <option value="tech">
                        Tech
                    </option>
                    <option value="history">
                        History
                    </option>
                </select>
            </div>
            <div className="form-group py-3">
                <label>Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className="form-group p-2">
                <label> Content </label>
                <ReactQuill theme="snow" value={content} onChange={(e)=>{setContent(e)}}/>
               
            </div>
            <div className="form-group py-3">
            <label>Key words</label>
                <input type="text" className="form-control"  onChange={(e)=>{setKeywords(e.target.value)}} value={keywords}/>
                <p>Enter three words. e.g. "Sleep, Alarm Clock, Rest"</p>
            </div>
            <div className="form-group p-2">
                <button className="btn light-button" onClick={(e)=>{handleSubmit(e)}} disabled={!title || !keywords || !content || !category} >
                    Post
                </button>
            </div>
         
        </form>
      </div>
    );
}

export default Create;