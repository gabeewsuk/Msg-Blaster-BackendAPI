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

/*
mongoose
  .connect(db)
  .then(() => console.log("MONGODB connected"))
  .catch((err) => console.log(err));
*/
//mongoose.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true })

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))

module.exports = {mongoose}
//Use Routes

app.use("/api/Items", Items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port} `));
