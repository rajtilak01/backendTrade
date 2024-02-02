var express = require('express');
var router = express.Router();
const  Data = require('../models/data');

/* GET home page. */

router.post('/data', async(req,res)=>{
  const {base_unit,quote_unit,low,high,last,type,open,volume,sell,buy,at,name} = req.body;
  const data = new  Data({base_unit, quote_unit, low, high, last, type, open, volume, sell, buy, at , name});
   try{
     await data.save()
      res.status(201).json({
        message : 'Data added successfully!'
    })
   }catch(err){
     console.log(err)
     res.status(409).json({message: 'Confilct'})
   }
  // const data= new Data({
    // {name,} = req.body
})

router.get('/', async function(req, res, next) {
  try {
    const data = await Data.find({});
    console.log(data);

    // if (data.length === 0) {
      // console.log("No data found in the collection.");}
    res.render('index', { data : data });

  } catch (err) {
    console.log(err);
  }
 
});

  router.get('/items/:id', async(req,res)=>{
    const id = req.params.id
    console.log(id);
    try{
      const data = await Data.find({});
      const dataParticular = await Data.findById(id)
      console.log(dataParticular);
      
      if(!dataParticular) return res.status(404).send('The item with the given ID was not found.')

      // res.status(200).json(dataParticular)
      res.render('item',{dataParticular,data});
    }catch(error){
      res.status(400).send('There was a problem finding the specified item.')
      console.error(error)
    }

  })
module.exports = router;
