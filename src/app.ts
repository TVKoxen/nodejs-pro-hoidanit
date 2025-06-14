//const express = require("express");
import express from "express";
import 'dotenv/config'
//require('dotenv').config(); dùng nào cũng được, import thì chỉ typesript được
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World nodemon");
})

app.get("/hoidanit", (req, res) => {
    res.send("Hello Nguyen");
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`);
    console.log("env port: ", process.env.PORT);
})
