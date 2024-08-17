const express = require("express");
const app = express();
const db = require("./config/db.js");

const handleLogin=require("./controllers/handleLogin.js")
const handleRegister=require("./controllers/handleRegister.js")
const validaterequest=require("./controllers/validaterequest.js")
const handleLogout=require("./controllers/handleLogout.js")

const cors=require("cors")
const cookieParser=require('cookie-parser')
const bodyParser = require('body-parser');

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

db()

//middlewares
app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

//defined routes
app.post("/register",handleRegister)
app.post("/login",handleLogin)
app.get("/validate",validaterequest)
app.get("/logout",handleLogout)


app.listen(process.env.PORT, (req, res) => {
  console.log("Listening on PORT", process.env.PORT);
});
