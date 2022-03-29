const mongoose = require("mongoose");
const orderSchema = require("./orderSchema")

const userschema = new mongoose.Schema({
    user_first_name: { type: String, match: /[A-Z a-z]/ },
    user_last_name: String,
    user_phone: { type: String, match: /[0-9]{9,11}/ },
    arr_orders: [orderSchema]
});
const User = mongoose.model("users", userschema);
module.exports = { userschema, User }