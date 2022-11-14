const path = require('path');
function server(){
    const express = require('express');
const fileHandler=require('./routes/fileHandler');
const app=express();
//app.use(express.json());
app.use(express.static(`${__dirname}/public/`));
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
})
app.use("/upload",fileHandler);
app.listen(4000,()=>{
    console.log("server listening on port 4000");
})
}
module.exports=server;