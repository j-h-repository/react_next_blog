import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context";
import { signUp, signIn } from "../../Functions/sign";
import { useRouter } from "next/router";

const Sign = () => {

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [location, setLocation] = useState("");
  const {state, setState} = useContext(UserContext)

  const handleSignUp = async (e)=>{
    e.preventDefault();
    try{
      const data = await signUp(password1,password2,username);
      console.log(data);
        if(data == true){
          router.push("/sign-in")
        } else{
        setUsername("");
        setPassword1("");
        setPassword2("");
        }
    } catch(err){
      console.log(err)
    } 
  }

  const handleSignIn = async (e)=>{
    e.preventDefault();
    try{
      const data = await signIn(username,password1);
      if(data && data.good ){
        console.log(data.data)
        setState({user:data.data.user, token:data.data.token});
		    window.localStorage.setItem("auth", JSON.stringify(data.data));
        router.push("/test");
      } else {
        setPassword1("");
        setUsername("");
      }
    } catch(err){
      console.log(err)
    }
  }

  const handleSubmit = (e)=>{
    if(window.location.pathname == "/sign-in"){
      handleSignIn(e)
    } else if(window.location.pathname == "/sign-up"){
      handleSignUp(e)
    }
  
  }
  

  

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  // onSubmit={(e) => { }}

  return (
    <>
      <form className="text-center" onKeyDown={(e)=>{e.keyCode==13 && handleSubmit(e)}} >
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="form-control"
            id="username"
            value={username}
          />
          <p hidden={location == "/sign-in"}>username must be more than 5 characters</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password1"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
          />
          <p hidden={location == "/sign-in"}>password must be more than 8 characters</p>
        </div>

        <div className="mb-3" hidden={location == "/sign-in"}>
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn light-button"
          hidden={location == "/sign-in"}
          disabled={password1.length<8 || password2.length<password1.length || password2!==password1 || username.length<5}
          onClick={(e)=>{handleSignUp(e)}}
        >
          Create an account
        </button>

        <button
          type="submit"
          className="btn light-button"
          hidden={location == "/sign-up"}
          disabled={password1.length<8 || username.length<5}
          onClick={(e)=>{handleSignIn(e)}}
          
        >
          Log in
        </button>


        
      </form>
      <div hidden={location == "/sign-in"} className="p-3">
        <p>
          Have an account? <a href="/sign-in">Sign in</a>
        </p>
      </div>
      <div hidden={location == "/sign-up"} className="p-3">
        <p>
          {" "}
          Need an account? <a href="/sign-up">Sign up</a>
        </p>
      </div>
    </>
  );
};

export default Sign;
