const express = require('express');
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const connect = mongoose.connect(url, { dbName: "app_menu", useNewUrlParser: true, useUnifiedTopology: true});


app.use(express.json())

connect.then(() => {
    console.log("Connected correctly to server");
    let pratos = require("./Controllers/menu_do_dia");
    app.use(function(req, res, next) {
        console.log("New request");
        next();
    })
    app.use("/pratos", pratos);
    app.listen(port, () => console.log("Bem vindo ao restaurante da Tatiana na porta ", port))
})
.catch(err => console.log(err));

