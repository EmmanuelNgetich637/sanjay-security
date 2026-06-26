const pool = require("../config/db");

// POST /api/quote
async function createQuote(req, res) {
  try {
    console.log("Incoming quote request:", req.body);
    console.log("===============");
    console.log(req.body);
    console.log("===============");
    
    const {
      name,
      company,
      email,
      phone,
      serviceType,
      siteLocation,
      startDate,
      details,
    } = req.body;

    // Validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !serviceType?.trim() ||
      !siteLocation?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, phone, service type and site location are required.",
      });
    }

    const sql = `
      INSERT INTO quotes
      (
        name,
        company,
        email,
        phone,
        service_type,
        site_location,
        start_date,
        details
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name.trim(),
      company ? company.trim() : null,
      email.trim(),
      phone.trim(),
      serviceType.trim(),
      siteLocation.trim(),
      startDate || null,
      details ? details.trim() : null,
    ];

    const [result] = await pool.execute(sql, values);

    return res.status(201).json({
      success: true,
      message: "Quote request received successfully.",
      id: result.insertId,
    });
  } catch (err) {
    console.error("========== QUOTE ERROR ==========");
    console.error(err);
    console.error("=================================");

    return res.status(500).json({
      success: false,
      message: err.sqlMessage || err.message,
    });
  }
}

// GET /api/quote
async function listQuotes(req, res) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM quotes ORDER BY created_at DESC"
    );

    return res.json({
      success: true,
      count: rows.length,
      quotes: rows,
    });
  } catch (err) {
    console.error("========== LIST QUOTES ERROR ==========");
    console.error(err);
    console.error("=======================================");

    return res.status(500).json({
      success: false,
      message: err.sqlMessage || err.message,
    });
  }
}

module.exports = {
  createQuote,
  listQuotes,
};