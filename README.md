﻿# Websocket overview
This is a WebSocket setup to show how real-time communication works between a client and a server. It uses Node.js and the ws package.

How It Works
The server creates a WebSocket that listens for connections. When a client connects, they can send and receive messages instantly — no need to refresh the page.
Allow two-way, event driven communication between web browser and server
Great for <bold>real-time</bold> applications

Getting Started
1. Install dependencies
You'll need Node.js installed. Then run:

2a.Create a Server Director
```bash
mkdir server
```

2b. Initialize the project
```bash
npm init -y
```

Install websocket library
```bash
npm install ws
```

3. Run the server
```bash
node index.js //or link to your server
```
The server will start on ws://localhost:8080

1. Open the client
Just open client.html in your browser. It connects to the WebSocket server and lets you send messages back and forth.

Files
server.js – basic WebSocket server

client.html – connects to the server and sends messages

Example
Start the server.

Open the HTML file in a browser.

Type a message and hit send — it shows up instantly.
