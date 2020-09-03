const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//server
const app = express();
const port = process.env.Port || 5000;

//middleware
//cors
app.use(cors);
//allows us to parse json
app.use(express.json);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',()=>{console.log("MongoDB connection established successfully")});

//Start the server
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});