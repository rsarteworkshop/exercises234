/*******************************************************************************
 * (c) Copyright HCL Technologies Ltd. 2018.  MIT Licensed!
 *******************************************************************************/

/**
 * Server application entry point
 * @author Mattias Mohlin
 */
'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 7004;
const env = process.env.NODE_ENV || 'development';


// Static middleware for serving static files 
app.get('/', function(req, res) {
    res.contentType("text/html");
    res.sendFile(__dirname + '/public/html/main.html');
});
app.get('/css', function(req, res) {
    res.contentType("text/css");
    res.sendFile(__dirname + '/public/css/styling.css');
});
app.get('/images/intersection', function(req, res) {
    res.contentType("img/png");
    res.sendFile(__dirname + '/public/images/intersection.png');
});
app.get('/main', function(req, res) {
    res.contentType("text/javascript");
    res.sendFile(__dirname + '/public/js/main.js');
});
app.get('/jquery', function(req, res) {
    res.contentType("text/javascript");
    res.sendFile(__dirname + '/public/js/jquery/jquery.min.js');
});

// Called when a message is received from the RT application
function msgReceived(msg) {
    if (msg.port == "lightChange") {        

        if (msg.event == "lightChanged") {
            // Expected format: LightChangeData{color"<color>",name"<name>",index <index>}
            const match = /^LightChangeData\{color"([^"]+)",name"([^"]+)",index\s+(\d+)\}$/.exec(msg.data);

            if (match) {
                const color = match[1];
                const name = match[2];
                const index = parseInt(match[3], 10);

                io.emit('light', {
                    'light' : color,
                    'name' : name,
                    'index' : index
                });
            }
            else {
                console.warn('Invalid lightChanged payload:', msg.data);
            }
        }
    }    
}

const tcpServer = require('rt-tcp-utils')('localhost', 7001); // Send TCP requests to RT app on port 7001

tcpServer.setEventReceivedCallback(msgReceived);
tcpServer.startListenForEvents(7002) // Receive TCP requests from RT app on port 7002
.then((data) => {
    console.log("Ready to receive TCP requests");    
});

// Messages from web application to RT application 
app.get('/close_ew_button', function(req, res) {
    tcpServer.sendEvent('closeEWLane', 'trafficSystemControl');

    res.end();
});
app.get('/open_ew_button', function(req, res) {
    tcpServer.sendEvent('openEWLane', 'trafficSystemControl');

    res.end();
});

http.listen(port, () => console.log(`Web app listening on port ${port}!`));
