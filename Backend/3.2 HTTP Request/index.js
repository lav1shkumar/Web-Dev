import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello friend, Welcome to the homepage</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Here is my phone no - 9898989898</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>My name is Lavish and I am from Delhi</h1>");
});

app.listen(port, () => {
    console.log(`You are connected to port ${port}`);
});