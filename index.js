require('dotenv').config();
const express = require('express');
const fileUpload = require("express-fileupload");
const path = require('path');
const mongoose = require('mongoose');
const start = async()=>{
  try {
    mongoose.connect(process.env.BD_CONN);
    app.listen(PORT,()=>{
      console.log(`Server has been started on ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
}

const app = express();
app.use(express.json({extended:true,limit:'50mb'}));
app.use(fileUpload({}));
app.use(express.static('public'));
app.use('/question',require('./routes/guestions.routes'));
app.use('/auth',require('./routes/auth.routes'));
app.use('/table',require('./routes/table.routes'));
// app.post('/upload', function(req, res) {
//  req.files.photo.mv('public/pics/'+req.files.photo.name);
//  res.status(200).json('Успешно добавили');
// });

const PORT = process.env.PORT || 4000;
const production = process.env.PRODUCTION;

if (production==='true'){
  app.use('/',express.static(path.join(__dirname,'/client','build')));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}

start();