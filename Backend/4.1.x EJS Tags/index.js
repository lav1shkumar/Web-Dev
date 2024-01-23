import express from "express";

const app = express();

let names = ["Apple", "Banana", "Cherry", "Lmao"];

app.get("/", (req,res) => {
    res.render("index.ejs",{names: names});
});

app.listen(3000);