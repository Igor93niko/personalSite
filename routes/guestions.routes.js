const {Router} = require('express');
const Questions = require('../models/Questions');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/create',async(req,res)=>{
  try { 
    const question = new Questions({
      name:req.body.name,
      question:req.body.question,
      email:req.body.email
    });
    await question.save();
    res.status(201).json({
      error:0,
      message:'Успешно добавили'
    });
  } catch (error) {
    res.status(500).json({
      message:'Что-то пошло не так',
      error:1,
      errorMs:error
    })
  }
});

router.get('/all', auth ,async(req,res)=>{
  try { 
    const questions = await Questions.find({});
    res.status(201).json({
      error:0,
      questions
    });
  } catch (error) {
    res.status(500).json({
      message:'Что-то пошло не так',
      error:1,
      errorMs:error
    })
  }
});

module.exports = router;