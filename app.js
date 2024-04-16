const express = require("express");
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to root url");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on the port " + PORT);
  } else console.log("Error occured! " + error);
});
