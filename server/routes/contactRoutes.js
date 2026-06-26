const express = require("express");
const router = express.Router();
const { createContact, listContacts } = require("../controllers/contactController");
const { verifyToken, requireRole } = require("../middleware/authMiddleware");

router.post("/", createContact);
router.get("/", verifyToken, requireRole("admin", "staff"), listContacts);

module.exports = router;