const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const bcrypt=require('bcrypt');
const User=require('./userSchema');

app.use(express.json());
app.use(cors());

const connection_url="mongodb+srv://Sparsh30:OLQTowZrZtwZtpgx@cluster0.vgkyxxj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url)
.then(()=> console.log("Database Connected"));

app.post("/register",(req,res)=>{
    const details=req.body;

    User.findOne({email:details.email},(err,docs)=>{
        if(docs!==null) res.status(409).json({})
        else{
            const hash=bcrypt.hashSync(details.password,10);
            User.create({email:details.email,password:hash})
            .then(result => res.status(201).json(result))
        }
    })
})

app.post("/login",(req,res)=>{
    const details=req.body;
    User.findOne({email:details.email},(err,docs)=>{
        if(docs===null) res.status(200).json({})
        else{
            const pass=bcrypt.compareSync(details.password,docs.password);
            if(pass===true) res.status(200).json(docs)
            else res.status(200).json({})
        }
    })
})

app.listen(8000,()=> console.log("Server running at port 8000"))