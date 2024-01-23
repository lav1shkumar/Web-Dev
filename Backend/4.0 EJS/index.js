import express from "express";

const app = express();

const d = new Date("January 20, 2024 01:15:00");
let day = d.getDay();

app.get("/", (req,res) => {

    if (day === 0 || day === 6){
        res.render("index.ejs", {
            day: "A weekend",
            quote: "Enjoy your time nigga",
        });
    }
    else{
        res.render("index.ejs", {
        day: "A weekday",
        quote: "Work hard nigger",
        });
    }
    
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});