//seting up express
const express = require('express');
const app = express();

//setting up body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

//setting up cors
const cors = require('cors');
app.use(cors());

//directing to the main project folder
app.use(express.static('website'));

//setting up the port and listening function
const port = 8080;

const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on port: ${port}`);
}