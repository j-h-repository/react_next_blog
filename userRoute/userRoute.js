import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { UserContext } from "../context/index";
import Page from "../pages/template/template";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(null);
  const router = useRouter();
  const {state, setState} = useContext(UserContext);

  useEffect(() => {
    if (state && state.token){
      getCurrentUser();
      console.log("fetching auth")
    } 
  }, [state && state.token]);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(
        `/current-user`);
      console.log(state)
      if (data.ok){ 
        setOk(true);
        console.log("good");  
      };
    } catch (err) {
        setState(null);
        window.localStorage.removeItem("auth")
      router.push("/sign-in");
    }
  };

  process.browser &&
    state === null && 
    setTimeout(() => {
      getCurrentUser();
    }, 3000);

  return !ok ? (
    
    <Page>
      waiting
    </Page>
  ) : (
    <>{children}</>
  );
};


export default UserRoute;