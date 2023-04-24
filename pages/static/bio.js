import StackCarousel from "../../components/carousel/stackCarousel"
import Page from "../template/template"

const Bio = ()=>{
    return (

        <Page>
            <div className="row text-center">
                <div className="heading lighter-text">
                    This website was built with the following tech stack:
                </div>
            </div>
           <StackCarousel/>
        </Page>
    
    )
}

export default Bio