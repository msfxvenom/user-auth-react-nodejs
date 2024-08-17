import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState({});
  const navigate=useNavigate();

  useEffect(() => {
    async function init() {
       try{
        const response = await axios.get("http://localhost:6969/validate", {
        withCredentials: true,
      });
      setUser(response.data);
    }catch(err){
        console.log("Some error occured",err);
        console.log("Redirecting to login");
        navigate("/login")
    }
    }
    init();
  }, []);

  async function handleLogout(){
    try{
        const response=await axios.get("http://localhost:6969/logout",{
          withCredentials:true
        })
        console.log(response.data)
        navigate('/login')
    }catch(err){
        console.log("Cannot clear cookie",err);
    }

  }
  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{marginTop:"20px"}}>Welcome {user.username} ! </h1>
        <div>Your email :{user.email}</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      
    </>
  );
}
