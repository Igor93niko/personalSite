const {Router} = require('express');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const router = Router();

router.post('/login',async(req,res)=>{
  try {

    const {email,password} = req.body;
    if (email!==process.env.EMAIL){
      return res.status(400).json({error:1,message:'Такого пользователя не сущетсвует'});
    }
  
    if (password!==process.env.PASSWORD)
    {
      return res.status(400).json({error:1,message:'Пароль не верный'});
    }
  
    const token = jsonwebtoken.sign(
      {date: Date()},
      process.env.JWT,
      {expiresIn:'4h'});
  
      res.status(200).json({error:0,token});
    
  } catch (error) {
    res.status(500).json({error:1,message:'Что-то пошло не так'})
  }
});

module.exports = router;