const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()
const path = require("path");

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log("Baza ulandi");
  })
  .catch((err) => {
    if (err) throw err;
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", require("./routes/users"));

if(process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, "./build")));

  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  });

} else {
  app.get("/", (req,res) => {
    res.send("Iltimos productionga chiqaring!")
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server run: " + PORT);
});
