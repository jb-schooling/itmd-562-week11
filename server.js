const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();

//BODY PARSER MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB CONFIG
const db = require("./config/keys").mongoUri;

//CONNECT TO MOGODB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MONGODB Connected");
  })
  .catch(error => {
    console.log(error);
  });

//USE ROUTES
const books = require("./routes/books");
app.use("/books", books);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve__dir, "client", "build", "index.html");
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
