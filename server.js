const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Items = require("./routes/api/Items");

const app = express();

//Bodyparser Middleware 

app.use(bodyParser.json());

//DB COnfig
//const db = require("./config/keys").process.env.MONGO_URI;

const db = require("./config/keys").mongoURI;
//Connect to MONGODB

/*
mongoose
  .connect(db)
  .then(() => console.log("MONGODB connected"))
  .catch((err) => console.log(err));
*/
//mongoose.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true })
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Grabes:CIZiBuePZEGuG44H@cluster0.dusdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('connected')
  // perform actions on the collection object
  client.close();
})
*/

mongoose.connect(db, { useNewUrlParser: true })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))
module.exports = {mongoose}


//module.exports = {client}
//Use Routes

app.use("/api/Items", Items);
app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Allow-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Allow-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();


} )

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port} `));
