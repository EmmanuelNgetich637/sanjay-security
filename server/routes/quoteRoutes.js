const express = require("express");
const router = express.Router();
const { createQuote, listQuotes } = require("../controllers/quoteController");
const { verifyToken, requireRole } = require("../middleware/authMiddleware");

router.post("/", createQuote);
router.get("/", verifyToken, requireRole("admin", "staff"), listQuotes);

module.exports = router;