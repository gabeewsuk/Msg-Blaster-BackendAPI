const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Items = require("./routes/api/Items");

const app = express();

//Bodyparser Middleware

app.use(bodyParser.json());

//DB COnfig

const db = require("./config/keys").mongoURI;
//Connect to MONGODB

mongoose
  .connect(db)
  .then(() => console.log("MONGODB connected"))
  .catch((err) => console.log(err));

//Use Routes

app.use("/api/Items", Items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port} `));
