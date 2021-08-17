// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
// set port number
const port = 8000;
// Setup Server
const server = app.listen(port, function(error) {
    if (error) {
        console.log('something went wrong');
    } else {
        console.log(`server is running on port: ${port}`);
    }
});

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Post Route
app.post('/weather', (req, res) => {
     req.body = projectData;
     req.body.temp = projectData.temp;
     req.body.date = projectData.date;
     req.body.feelings = projectData.feelings;
     res.send()
});
// Callback function to complete GET '/all'
app.get('/data', (req, res) => {
    res.send(projectData)
});
console.log(projectData);




