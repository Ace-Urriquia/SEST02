const jwt = require("jsonwebtoken");

const authMiddleware = async (request,response,next) => {
   const token = request.header("Authorization");

   if(!token){
    return response.status(403).json({error:"Access Denied."});
   }
   try{
  const decoded = jwt.verify(token.substring(7),process.env.JWT_SECRET);
  request.user = {userId:decoded.id};
  next();
   }catch(error){
    response.status(403).json({error:"Access Denied."});
   }
};

module.exports = {authMiddleware}