const mongoose=require("mognoose");

const winningSchema=new mongoose.Schema({
    Id:Number,
    user_id:{
        type: mongoose.Types.ObjectId,
        ref:"users"
    },
    item_id:{
        type:mongoose.Types.ObjectId,
        ref:"items"
    },
    winning_date:{type:Date,default:Date.now()}
})

const Winning=mongoose.model("winning",winningSchema);
module.exports={
    winningSchema,Winning
}