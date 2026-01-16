import express from "express";
import {prismaClient} from "@repo/db/client";
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from HTTP Server!");
});

app.post("/signup", (req, res) => {
    const { username, password,name } = req.body;
    prismaClient.user.create({
        data: {
            username,
            password,
            name
        }
    }).then(user => {
        res.status(201).json(user);
    })
});
app.listen(3002);