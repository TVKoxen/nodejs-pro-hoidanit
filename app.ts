//const express = require("express");
import express from "express";
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Thanh Nguyen");
})

app.get("/hoidanit", (req, res) => {
    res.send("Hello Nguyen");
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`);
})