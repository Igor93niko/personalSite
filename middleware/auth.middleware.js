const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async(req,res,next) => {
  if (req.method==='OPTIONS'){
    return next();
  }
  try {
    const token = req.headers.authorization;
    if (!token){
      return res.status(401).json({error:1,message:'Нет авторизации'});
    }
    const decoded = jwt.verify(token,process.env.JWT);
    next();
  } catch (error) {
    res.status(401).json({error:1,message:'Нет автоизации'});
  }
}