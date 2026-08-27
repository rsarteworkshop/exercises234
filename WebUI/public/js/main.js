/*******************************************************************************
 * (c) Copyright HCL Technologies Ltd. 2018.  MIT Licensed!
 *******************************************************************************/

/**
 * Client application entry point
 * @author Mattias Mohlin
 */

$(function () {

    var socket = undefined;
    var isBrowser = true;
    
    if (isBrowser) {
        const baseUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
        const socketPath = `${window.location.pathname}socket.io`;
        console.log("baseUrl: " + baseUrl);
        console.log("socketPath: " + socketPath);
        socket = io(baseUrl,{
            path: socketPath
          });
    
    } else {
        socket = io();
    }

   
    socket.on('light', function(msg) {
        var lightName = (msg.name || '').toLowerCase();
        var color = (msg.light || '').toLowerCase();

        var labelSelector = '#ns-light-label';
        var redSelector = '#rl';
        var yellowSelector = '#yl';
        var greenSelector = '#gl';
        var labelPrefix = 'North/South';

        if (lightName === 'east') {
            labelSelector = '#ew-light-label';
            redSelector = '#erl';
            yellowSelector = '#eyl';
            greenSelector = '#egl';
            labelPrefix = 'East/West';
        }
        else if (lightName !== 'north') {
            return;
        }

        $(labelSelector).text(labelPrefix + ': ' + (msg.light || 'N/A'));
        $(redSelector).css('fill', 'black');
        $(yellowSelector).css('fill', 'black');
        $(greenSelector).css('fill', 'black');

        if (color === 'off') {
            // Keep all bulbs off (black)
        }
        else if (color === 'red') {
            $(redSelector).css('fill', 'red');
        }
        else if (color === 'yellow') {
            $(yellowSelector).css('fill', 'yellow');
        }
        else if (color === 'green') {
            $(greenSelector).css('fill', 'green');
        }
    });
    

    $('#close_ew_button').unbind('click').bind('click', function (e) {
        if(isBrowser){
            $.get('./close_ew_button', function () {

            });
        }
        else{
            $.get('/close_ew_button', function () {

            });
        }
        
    });
    $('#open_ew_button').unbind('click').bind('click', function (e) {
        if(isBrowser){
            $.get('./open_ew_button', function () {

            });
        }
        else{
            $.get('/open_ew_button', function () {

            });
        }
        
    });
});