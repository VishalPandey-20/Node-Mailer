const express = require("express");
const app = express();

// require nodemailer
const nodemailer = require('nodemailer'); 
require("dotenv").config();

//server testing

app.get("/hello",(req,res)=>{
    res.send("hello node.js")
    console.log("hello node.js");
});

//send any mail that first step;
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail.com', 
    auth: { 
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

// second step 

let mailDetails = { 
    from: 'vvishal3612@gmail.com', 
    to: 'vishalpandey7654580647@gmail.com', 
    subject: 'Test mail',
    text: 'Hii vishal where are you'  
};

// third step
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs',err); 
    } else { 
        console.log('Email sent successfully'); 
    } 
}); 


app.listen(4560,()=>{
    console.log("server is running port on 4560.!");
})
