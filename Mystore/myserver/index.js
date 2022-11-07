const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const app = express();
const schemas = require("./schemas/user.schema");
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello , Welcome to server");
});

app.get("/getUsers", (req, res) => {
  res.send(registeredUsers).json();
});

const registeredUsers = [];

app.post("/register", (req, res) => {
  registeredUsers.push(req.body);
  //const modal = new schemas.UserSchema(req.body);
  console.log(req);
  return res.json({ message: "User registered successfully" }).status(200);
});

const PORT = process.env.PORT || 5000;
http.createServer(app).listen(PORT, () => {
  console.log("server started");
});
