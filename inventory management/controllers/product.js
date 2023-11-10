const Item = require('../models/item');


exports.postAddProduct = async (req , res) => {
  try{
    const candy = req.body.candyName;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    let newItem = await Item.create({
      candy,
      description,
      price,
      quantity,
    });

    res.status(201).json({newData:newItem});
  }catch(err){
    console.log(err);
  }
}

exports.getProducts = async(req,res) => {
  try{
    const items = await Item.findAll();
    res.status(200).json({items});
  }catch(err){
    res.status(500).json({error:err});
  }
}

exports.updateItem = async(req,res) => {
  try{
    
    const {itemId , num} = req.query;
    // console.log(itemId,num)
    const item = await Item.findByPk(itemId);
    console.log(item.dataValues.quantity);
    item.quantity -= num;
    console.log(item.dataValues.quantity);
    const response = await item.save();
    res.status(200).json({response});
    
  }catch(err){
    res.status(500).json({error:err});
  }
}



