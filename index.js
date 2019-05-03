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
    client.pushMessage('C71e61173ab8fd061779aa8a7c45b32f1', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayVIP2', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C58b5f7b1f101b2228de143ea23056567', respText);
	return res.sendStatus(200);
});


app.get('/BanHuaySuperVIP', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cb625908a1165c7e09274a75339c496d6', respText);
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
    client.pushMessage('C489301cf8fb99c8b8bd44e68c1f28eb5', respText);
	return res.sendStatus(200);
});



app.get('/BanHuayVIP4', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cb32438771ec4e1a003c8edf1eb0c2e29', respText);
	return res.sendStatus(200);
});


app.get('/BanHuayVIPLemon', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cf19817d7d024c87657c480eadd4d049c', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayTest5Day', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Ccbd0377cd442f344e148303835a8cb8b', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayVIP5', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cda886585ef55a2cace236c63295e8f2c', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayVIP8', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C2e0db166bc9610345862091bafe079c2', respText);
	return res.sendStatus(200);
});


app.get('/BanHuayVIP7', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C63659589145c8825b46b8bfa2f970f2a', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayVIP9', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Ca1f296abf836482c2d16b5ebbb137ab8', respText);
	return res.sendStatus(200);
});

app.get('/FunmoneyPingPong', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('Cdc1a9062ca476a619b83a1f2b597b06e', respText);
	return res.sendStatus(200);
});

app.get('/RichPingPong', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C5a60b1f9d1fd56281fc6c0d9f787d834', respText);
	return res.sendStatus(200);
});

app.get('/BanHuayVIP5PP', function (req, res) {
    const respText = { type: 'text', text: req.query.respText };
    client.pushMessage('C4c5eb1aa6da1f01b4284796835f64bc9', respText);
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
