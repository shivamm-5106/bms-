import express from "express";
import client from "@repo/db/client";
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from HTTP Server!");
});

app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    client.user.create({
        data: {
            username,
            password
        }
    }).then(user => {
        res.status(201).json(user);
    }).catch(e => {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.listen(3000);