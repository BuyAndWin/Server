const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    id: { type: String, require: true },
    item_name: String,
    item_description: String,
    item_price: Number
})

const Item = mongoose.model("Item", itemsSchema);
module.exports = { itemsSchema, Item };