import { useRouter } from "next/router";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({ user: {}, token: "" });
  const moveIn=["main main-in"];
  const [disp, setDisp] = useState(moveIn)
  const [page, setPage] = useState("")
  


const token = state && state.token ? state.token : "";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
axios.defaults.headers.common ["Authorization"] = `Bearer ${token}`;



  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);

  axios.interceptors.response.use(
    function(response){
      {return response}
},
    function(error){
      let err = error.response;
      if(res.status===401 && res.config && !res.config._isRetryRequest){	
        setState(null);
        window.localStorage.removeItem("auth");
        router.push("/signin")
      }
    }
)


  return (
    <UserContext.Provider value={{state, setState, disp, setDisp, page, setPage}} >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
