const express = require('express');
const UAParser = require('ua-parser-js');
require("./db")
const User = require('./User');


const app = express();



app.get('/track', (req, res) => {
    const userAgent = req.headers['user-agent'];
    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const data = {
        ip: req.ip,
        userAgent: userAgent,
        device: result.device,
        os: result.os,
        browser: result.browser
    };

    console.log("User Info:", data);

    // You can store in DB here
    try {
        User.create([{
            ip: req.ip,
            name: req.ip,
            agent: userAgent,
            data: ""
        }])
    } catch (err) {
        console.log("erro", err)
    }

    res.send("Tracking captured ✅");
});

app.listen(9000, () => {
    console.log("Server running on port 3000");
});