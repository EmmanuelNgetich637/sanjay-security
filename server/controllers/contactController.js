const pool = require("../config/db");

// POST /api/contact
async function createContact(req, res) {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email and message are required" });
    }

    await pool.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone || null, message]
    );

    return res.status(201).json({ message: "Message received" });
  } catch (err) {
    console.error("createContact error:", err);
    return res.status(500).json({ message: "Could not send message" });
  }
}

// GET /api/contact — admin only, for the future dashboard
async function listContacts(req, res) {
  try {
    const [rows] = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
    return res.json({ contacts: rows });
  } catch (err) {
    console.error("listContacts error:", err);
    return res.status(500).json({ message: "Could not load messages" });
  }
}

module.exports = { createContact, listContacts };