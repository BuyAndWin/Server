const Item = require = ("../models/itemsModel").Item;

//שליפת כל המוצרים
const getallItems = async (req, res) => {
    try {
        let item = await Item.find({});
        return res.send(item);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
//שליפת מוצר לפי id
const getItemById = async (req, res) => {
    try {
        let item = await Item.findByid({ id: req.id });
        return res.send(item); return res.send(item);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
//הוספת מוצר
const addItem = async (req, res) => {
    try {
        let item = new Item(req.body);
        await item.save();
        console.log(item);
        return res.send(item);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

getallItems();

//מחיקת מוצר
const deleteItem = async (req, res) => {
    let itemId = req.params.id;
    try {
        let item = await Item.findByIdAndDelete(itemId);
        return res.send(item);
    }
    catch{
        return res.status(400).send(e);
    }
}
module.exports = { getallItems, getItemById, addItem, deleteItem }