const path = require('path');
const express = require('express');
const multer=require('multer');
const fileHandler=express.Router();
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     const balayAudPath = path.join('C:\\filetransfer');
    if(!fs.existsSync(balayAudPath))
      fs.mkdirSync(balayAudPath, { recursive: true });
      cb(null, balayAudPath)
    } ,
    filename: function (req, file, cb) {
  
        cb(null,  file.originalname );
  
    }
  });
  const upload = multer({ storage: storage }).any();
 // const upload = multer({dest:"./uploads/"})
fileHandler.post("/",(req,res)=>{
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(err);
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log(err);
    }

    
  })
  res.send({ message: 'Files Transfered!' } );
})
module.exports=fileHandler;