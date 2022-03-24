const winnig=require('../models/winningModel');
const Item=require('../models/item').Item;

//הוספת זכיה
const addWinning=async(req,res)=>{
    try{
        let win=new Winning(req.body);
        await win.save();
        return res.send(win);
    }
    catch(w)
    {
        return res.status(400).send(w);
    }
}
//שליפת כל המשתמשים שהזמינו מוצר מסויים לפי קוד מוצר - עבור ההגרלה 
const getAllUsersByItemId=async(req,res)=>{
    let code=req.params.id;
    try{
        let users=await User.find({}).filter(user=>{user.arr_orders.find(order=>order.item_id==code)!=-1});
        return res.send(users);
    }
    catch(err){
        return res.status(400).send(err);
    }
}
//שליפת זוכה על פי קוד זכיה
const getWinnerByWinnigCode=async(req,res,id)=>{
    let code=req.params.id;
    try{
        let win=await Winning.findById(code);
        return res.send(win);
    }
    catch{
        return res.status(400).send(err);
    }
}
//שליפת זוכה על פי קוד מוצר
const getWinnerByItemId=async(req,res,id)=>{
    let code=req.params.id;
    try{
        let winner=await Winning.find({item_id:code});
        return res.send(win);
    }
    catch(err){
        return res.status(400).send(err);
    }
}

module.exports={addWinning,getAllUsersByItemId,getWinnerByWinnigCode,getWinnerByItemId}