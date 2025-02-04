const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve `data.txt` content
app.get("/data", (req, res) => {
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading file");
            return;
        }

        // Split data by double newlines to separate rooms
        const rooms = data.split("\n\n").map((room) => {
            const lines = room.split("\n").map((line) => line.trim());
            return {
                roomName: lines[0] || "",
                model: lines[1] || "",
                serviceProvider: lines[2] || "",
                firmwareVersion: lines[3] || "",
                macAddress: lines[5] || "",
                ipAddress: lines[6] || "",
                videoAppVersion: lines[7] || "",
            };
        });

        res.json(rooms);
    });
});

// Handle form submission
app.post("/submit", (req, res) => {
    console.log(req.body); // Log form data to console
    res.redirect("/output.html");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
