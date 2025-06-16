//const express = require("express");
import express from "express";
import 'dotenv/config'
import webRoutes from "./routes/web";
//require('dotenv').config(); dùng nào cũng được, import thì chỉ typesript được

const PORT = 8080;
const app = express();

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

//config routes
webRoutes(app);

// config static file: image/css/js
app.use(express.static('public'))
app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`);

})
