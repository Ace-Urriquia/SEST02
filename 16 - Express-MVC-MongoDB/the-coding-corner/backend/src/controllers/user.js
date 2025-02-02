const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const signupUser = async (request,response) => {
   const {username,password}= request.body;

   try{
  const exists = await User.findOne({username});
  if(exists) {
    return response
    .status(400)
    .json({error: "User name already exists"});
  }

 const hashedPassword = await bcrypt.hash(password,10);
const newUser = await User.create({
    username,
    password: hashedPassword,
});
response.status(201).json({newUser});
   }catch(error){
       response.status(400).json({message: error.message});
   }
};

const loginUser = async (request,response) => {
   const {username,password} = request.body;
   

   try{
 const exists = await User.findOne({username});
 if(!exists){
    return response.status(404).json({error:
        "Username not found."
    });
 }
 const isPasswordMatched = await bcrypt.compare(password,exists.password);

 if(!isPasswordMatched){
    return response.status(400).json({error:
        "Incorrect Password."
    });
 }
 //payload = unique indentifier
 // sercret_key -- this confidential key is stored inside of the server

 const token = jwt.sign({userId:exists._id}, process.env.
    JWT_SECRET);

    response.status(200).json({username,token})

   }catch(error){
    response.status(400).json({message: error.message});
   }
};

module.exports ={
    signupUser,
    loginUser,
};