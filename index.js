'use strict';
//
const line = require('@line/bot-sdk');
const express = require('express');
var bodyParser = require('body-parser');


// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();
//const https = require('https');
const http = require('http');
const fs = require('fs');
//set ssl 
//var https_options = {
 //ca: fs.readFileSync("../sslKey/alerts_siampiwat_in_th.ca-bundle"),
 //key: fs.readFileSync("../sslKey/private.key"),
 //cert: fs.readFileSync("../sslKey/alerts_siampiwat_in_th.crt")
//};

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', (req, res) => {
   console.log(req.body.events[0].source);
   console.log(req.body.events[0]);
   res.sendStatus(200);
});

app.get('/', function (request, response) {
    response.send('This is MGL Line Bot.');
});

//Line push notification module
app.get('/TestBanHuay', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cf659dcd9b0d0e6c2529dd92ff7916d9d', respText);
	return res.sendStatus(200);
});


app.get('/BanHuayPingPong', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cfbdafcc3a324d494c241895cc2186def', respText);
	return res.sendStatus(200);
});
//End of module


// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }
  
  //use reply API
  //return client.replyMessage(event.replyToken, echo);
  return res.sendStatus(200);
}

// listen on port
const port = process.env.PORT || 443;
//app.listen(port, () => {
//  console.log(`listening on ${port}`);
//});

//https.createServer(options, app).listen(port, () => {
 // console.log(`listening on ${port}`);
//});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
