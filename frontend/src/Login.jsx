import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg]=useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6969/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
    } catch (err) {
      setMsg("Incorrect Details")
      setTimeout(()=>{
        setMsg("")
      },2500)
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal">Please Login in</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Log in
          </button>
        </form>
        <div onClick={()=>navigate('/register')} style={{cursor:"pointer"}}>Register as new user</div>
        <br></br>
        <div>{msg}</div>
      </main>
      
    </>
  );
}
