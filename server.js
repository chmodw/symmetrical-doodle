'use strict';
const express = require('express');
const dns = require('dns');
const url = require('url');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
// Basic Configuration 
const port = process.env.PORT || 8000;
//connect with the database
connectDB();

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// @route   POST api/shorturl/new
// @desc    add new url
// @access  Public
app.post("/api/shorturl/new", function (req, res) {
  
  //get the url
  let parsedUrl = url.parse(req.body.url).hostname;
  // validate the url with dns.lookup if the url is not valid, 
  // will return a error message in json format
  dns.lookup(parsedUrl, (err, addresses, family) => {
    if(addresses == null){
      res.json({'error' : 'invalid url'});
    }else{
      res.json({'url' : parsedUrl});
    }
  });

});

app.listen(port, function () {
  console.log('Node.js listening ...');
});  