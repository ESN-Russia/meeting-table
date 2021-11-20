import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as WebSocket from 'ws';

import {OverlayStateContainer} from "./overlay_state";

const port = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({server, path: "/wss"});

const stateContainer = new OverlayStateContainer();

webSocketServer.on('connection', (ws: WebSocket) => {
    ws.send(stateContainer.toString());

    ws.on('message', (message) => {
        console.log(message.toString());
        stateContainer.updateStateFromMessage(message.toString());
        webSocketServer.clients.forEach((client) => client.send(stateContainer.toString()));
    });
});

app.use(express.static(path.join(__dirname, "./static/")));

server.listen(port, () => {
    console.log("Started on port:", port);
});
