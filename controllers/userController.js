const {User}=require("../models/userModel");

//הוספת משתמש 
const addUser=async(req,res)=>{
    let user=new User(req.body);
    try{
        await user.save(user);
        return res.send(user);
    }
    catch(err){
        return res.status(400).send(err);
    }
}

//שליפת כל המוצרים שהוזמנו על פי קוד משתמש
const getAllitemsByUserId=async(req,res)=>{
    let userId=req.params.id;
    try{
        let arr=User.findById(userId).arr_orders;
        return res.send(arr);
    }
    catch(err){
        return res.status(400).send(err);
    }
}

//הוספת הזמנה 
const addOrder=async(req,res)=>{
    User.findById(req.params.id,function(err,re){
        if(!err){
            if(!re)
                await(addUser);
            else{
                re.arr_orders.push(req.body.newOrder);
                await re.markModified('arr_orders');
                await re.save(function(saverr,savere){
                    if(!saverr)
                        res.status(200).send(savere);
                    else
                        res.status(400).send(saverr);
                });
            }
        }
        else
        res.status(400).send(err);
    })
}
module.exports={addUser,getAllitemsByUserId,addOrder}