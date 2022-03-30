const mongoose = require("mongoose");
const express = require("express");
const itemsRout = require("./Routes/items");
const userRout = require("./Routes/user");
const winningRout = require("./Routes/winning");
const app = express();


mongoose.connect("mongodb://localhost:27017/myDB")
    .then(() => { console.log("connted to mongo db") })
    .catch(err => console.log(err));

app.use(express.json())
app.use("/items", itemsRout)
app.use("/user", userRout)
app.use("/winning", winningRout)
app.listen(4500, () => { console.log("waiting") })