const mongoose = require("mongoose");
const express = require("express");
const itemsRout = require("./routes/items");
const userRout = require("./routes/user");
const winningRout = require("./routes/winning");
const app = express();



mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("connted to moingo db")
})
    .catch(err => console.log(err));

    
app.use(express.json())
app.use("/items", itemsRout)
app.use("/user", userRout)
app.use("/winning", winningRout)
app.listen(4500, () => { console.log("waiting") })