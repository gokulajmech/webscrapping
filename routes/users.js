var express = require('express');

var router = express.Router();
const {mongodb,MongoClient,dbName,dbUrl}=require("../dbConfig");

/* GET users listing. */
router.get('/', async(req, res)=>{
  let client=await MongoClient.connect(dbUrl);
  try{
    let db=await client.db(dbName);
    
    let product=await db.collection('products').find().toArray();
   
    console.log(product);
    if(product)
    {
      res.json({
        product
      })
    }
    else
    {
      res.json({
        message:"Product unavailable"
      })
    }
    
  }
  catch(err)
  {
    res.json({
      message:"internal server error"
    })
  }
  finally{
    client.close();
  }
});

router.get('/:param', async(req, res)=>{
  let client=await MongoClient.connect(dbUrl);
  try{
    let db=await client.db(dbName);
    let product=await db.collection('products').find({"prodType":req.params.param}).toArray();
   
    console.log(req.params.param);
    if(product)
    {
      res.json({
        message:req.body,
        product
      })
    }
    else
    {
      res.json({
        message:"Product unavailable"
      })
    }
    
  }
  catch(err)
  {
    console.log(err);
    res.json({
      message:"internal server error"
    })
  }
  finally{
    client.close();
  }
});



router.post('/register',async(req,res)=>{
  let client=await MongoClient.connect(dbUrl);
  try{
    let db=await client.db(dbName);
    let product=await db.collection('products').insertOne(req.body);
    
    res.json({
      message:"product added successfully"
    })
  }
  catch(err)
  {
    res.json({
      message:"Internal server error"
    })
  }
  finally{
    client.close();
  }
});

router.delete('/:id', async(req, res)=>{
  let client=await MongoClient.connect(dbUrl);
  try{
    let db=await client.db(dbName);
    let product=await db.collection('products').findOne({_id:mongodb.ObjectId(req.params.id)});
   
    console.log(req.params.param);
    if(product)
    {
      await db.collection('products').deleteOne({_id:mongodb.ObjectId(req.params.id)});
      res.json({
        message:"deleted successfully",
       
      })
    }
    else
    {
      res.json({
        message:"Product unavailable"
      })
    }
    
  }
  catch(err)
  {
    console.log(err);
    res.json({
      message:"internal server error"
    })
  }
  finally{
    client.close();
  }
});

module.exports = router;
