const {Router} = require('express');
const Table = require('../models/Table');
const names = require('../name.json');
const router = Router();

router.get('/create',async(req,res)=>{
  try { 
    const today = new Date(Date.now());
    const maxName = names.name.length;
    for (let i=1; i<32; i++)
  {
    const count = Math.floor(Math.random() * 100);
    const distance = Math.floor(Math.random()*200);
    const numName = Math.floor(Math.random()*(maxName-1));
    const name = names.name[numName];
    const table = new Table({
      date:today,
      name,
      distance,
      count
    });
    await table.save();
  }
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

router.get('/get', async(req,res)=>{
  try { 
    const table = await Table.find({});
    res.status(200).json({
      error:0,
      table
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