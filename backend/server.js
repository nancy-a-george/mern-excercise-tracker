const express = require('express');
const cors = require('cors');

require('dotenv').config;

//server
const app = express();
const port = process.env.Port || 5000;

//middleware
//cors
app.use(cors);
//allows us to parse json
app.use(express.json);

//Start the server
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});