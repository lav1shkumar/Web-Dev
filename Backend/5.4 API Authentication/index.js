import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "lav1sh";
const yourPassword = "1234";
const yourAPIKey = "25977266-aa4c-4b61-982b-a7c800b78b25";
const yourBearerToken = "06fd4d1d-4274-4feb-b820-24a513e3c1f4";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try {
    const response = await axios.get(API_URL + "random");
    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", {content: result});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {

  try {
    const response = await axios.get(API_URL + "all", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });

    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", {content: result});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }

});

app.get("/apiKey", async(req, res) => {
  try {
    const response = await axios.get(API_URL + "filter?score=5&apiKey=" + yourAPIKey);
    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", {content: result});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

app.get("/bearerToken", async(req, res) => {
  try {
    const response = await axios.get(API_URL + "secrets/3", {
      headers: { 
        Authorization: "Bearer " + yourBearerToken
      },
    });
    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", {content: result});

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
