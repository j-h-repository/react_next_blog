import {UserProvider} from "../context/index"
import "bootstrap/dist/css/bootstrap.min.css"
import "../public/styles/main.css"
import Nav from "../components/navigation/nav"
import Footer from "../components/footer/footer"

export default function MyApp({ Component, pageProps }) {

  
    
    return(
        <>
        <UserProvider>
            <Nav/>
            <Component {...pageProps} />
            <Footer/>
        </UserProvider>
        
        </>


    ) 
  }