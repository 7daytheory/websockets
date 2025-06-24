//Websockets server

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082});

//ws refers to a single connection to the server side
// If you have multiple connections at once, using many ws objects
wss.on("connection", ws => {
    console.log("New client Connected")

    ws.on("message", data => {
        console.log(`Received data from client: ${data}`);
    });

    //Putting this on the ws single connection and not wss
    ws.on("close", () => {
        console.log("Client has disconnected")
    })
})