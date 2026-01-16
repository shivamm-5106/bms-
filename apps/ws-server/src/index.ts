import { WebSocketServer } from "ws";
import {client} from '@repo/db/client';

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (socket) => {
    client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.on("message", (message) => {
        console.log(`Received message: ${message}`);
        socket.send(`Echo: ${message}`);
    });
});