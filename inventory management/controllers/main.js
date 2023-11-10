

exports.getMainPage =  async (req,res)=>{
    try{
        res.sendFile('index.html' , {root : 'front-end'})
       
    }catch(e){
       res.status(500).json({error:e});
    }
  
}