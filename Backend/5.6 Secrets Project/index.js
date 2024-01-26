import express from "express";
import axios from "axios";

const app = express();
app.listen(3000);

app.use(express.static("public"));

app.get("/", async(req,res) => {

    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const data = response.data;
        console.log(data);
        res.render("index.ejs", {
            secret: data.secret,
            user: data.username
        });
    
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          content: error.message,
        });
      }
    res.render("index.ejs");
});
