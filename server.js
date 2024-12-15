const express = require("express");
const fs = require("fs");
const app = express();

// Middleware to parse JSON data in requests
app.use(express.json());

// Endpoint to log IP data
app.post("/log-ip", (req, res) => {
    const logData = req.body;

    if (logData && logData.ip) {
        // Create a log entry
        const logEntry = `${new Date().toISOString()} - IP: ${logData.ip}, Location: ${logData.city}, ${logData.region}, ${logData.country}\n`;

        // Append the log entry to ip_logs.txt
        fs.appendFile("ip_logs.txt", logEntry, (err) => {
            if (err) {
                console.error("Error writing to log file:", err);
                return res.status(500).json({ error: "Failed to log IP" });
            }

            console.log("IP logged successfully:", logEntry.trim());
            res.status(200).json({ message: "IP logged successfully" });
        });
    } else {
        res.status(400).json({ error: "Invalid data received" });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
