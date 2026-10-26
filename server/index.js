import express from "express"

const app = express();


app.get("/",(req,res)=>{
    res.send("Server home page");
})

app.listen(5000, (req,res)=>{
    console.log("Server listening on 5000 ...")
})