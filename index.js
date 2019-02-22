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


app.get('/BanHuay', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cfbdafcc3a324d494c241895cc2186def', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayVIP1', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C5a60b1f9d1fd56281fc6c0d9f787d834', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayVIP2', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C63659589145c8825b46b8bfa2f970f2a', respText);
	return res.sendStatus(200);
});


app.get('/BanHuaySuperVIP', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C1dfead39fee57530a3fa3093e236a360', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayTestRoom5Day', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Ccbd0377cd442f344e148303835a8cb8b', respText);
	return res.sendStatus(200);
});


app.get('/BanHuayRCAPingpong', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cff4272e5b5c57660a255bab2d836a818', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayRoumSien', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C6a98dc021759f053b05c9568beb783f2', respText);
	return res.sendStatus(200);
});


app.get('/BanHuayPingpongRubSub', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C45d056994156e5261d9bf9c49dc0a6c9', respText);
	return res.sendStatus(200);
});

app.get('/PPgummatan', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C31ef3d081823bd1ca517cee51a333db3', respText);
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
