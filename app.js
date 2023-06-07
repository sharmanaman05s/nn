const express =require('express');
const bodyparser=require('body-parser');
const request= require('request');
const app=express();
const fs = require('fs');



app.use(express.static("css"));
app.use(bodyparser.urlencoded({extended: true}));

app.get('/',function(req,res)
{
    res.sendFile(__dirname +'/index.html');
});

// app.post('/',function(req,res)
// {
//     const name=req.body.name;
//     const email=req.body.email;
//     const phone=req.body.phone;
//     const message=req.body.message;
//     console.log(message);
//     const container=document.createElement('div');
//     container.class='info';
//     const naam=document.createElement('div');
//     naam.textContent='Name: ' + name;
//     container.appendChild(naam);
//     res.re();
    


// });
app.post('/',function(req,res)
{
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const message=req.body.message;
    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
      };
     
    console.log(formData);

  // Send a success response
  res.redirect('/')
});

// ...rest of your code












  
app.listen(3000,function()
{
    console.log('server running at 3000');
});
