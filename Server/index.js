const express = require("express");


const app = express();
const httpServer = require("http").createServer(app);
const socketio = require("socket.io");
const io = socketio(httpServer);


io.on("connection",(socket)=>{
    console.log('bwesit');
    socket.on("message",(message)=>{
        console.log(message);
    })
})

app.get("/test",(req,res)=>{
    res.json({
        message:"bobo"
    })
})



app.use(express.json());

app.post("/register",async(req,res)=>{
    
})

httpServer.listen(5000,()=>console.log(`port running on 5000`));