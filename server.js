//seting up express
const express = require('express');
const app = express();

//setting up body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setting up cors
const cors = require('cors');
const { networkInterfaces } = require('os');
app.use(cors());

//directing to the main project folder
app.use(express.static('website'));

//setting up the port and the listening function
const port = 8080;

const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on port: ${port}`);
};

//setting the project's endpoint
projectData = {};

//setting the POST route

app.post('/info', info);

function info(req, res) {

    const data = req.body;
    console.log("Server side data", data)

    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feel;

    res.send(projectData);
};

//setting the GET route
app.get('/all', getInfo)

function getInfo(req, res) {
    res.send(projectData)
    console.log("Server side data", projectData)
};
