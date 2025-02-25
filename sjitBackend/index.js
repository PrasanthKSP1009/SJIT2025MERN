const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Backend</h1>")
})
app.get("/static",(req,res)=>{
    res.sendFile("/Users/prasanthksp/Documents/RAMPeX-Parent-Folder/Trainings/SJIT2025MERN/HTML_CSS/index.html")
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server Started Successfully");
});
