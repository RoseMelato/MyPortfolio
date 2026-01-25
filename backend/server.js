require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const transporter = require("./email");
const sendEmail = require("./email");



const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Test route
app.get("/", (req, res) => {
  res.send("Contact API is running");
});

// Contact form route
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    console.log("Invalid data:", req.body);
    return res.status(400).json({ message: "Invalid form data" });
  }

  const sql =
    "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, subject, message], async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    try {
      await sendEmail({ name, email, subject, message });
      res.status(201).json({ message: "Message sent successfully" });
    } catch (emailError) {
      console.error("Email error:", emailError);
      res.status(500).json({ message: "Saved, but email failed" });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
