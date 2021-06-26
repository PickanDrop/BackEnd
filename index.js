// Your code start HERE!
const express = require("express");
const cors = require("cors");
const app = express();

const options = {
    origin: true,
    credentials: true,
    methods: ["GET,POST,OPTIONS,PUT,DELETE"],
};

app.use(cors(options));
const port = 8080;

app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});

app.listen(port, () => {
    console.log('done')
});

module.exports = app;