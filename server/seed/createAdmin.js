require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const bcrypt = require("bcryptjs");
const pool = require("../config/db");

// Run with: node seed/createAdmin.js "Full Name" "email@example.com" "password123" [role]
// role defaults to "admin" if omitted.
async function createAdmin() {
  const [name, email, password, role] = process.argv.slice(2);

  if (!name || !email || !password) {
    console.error(
      'Usage: node seed/createAdmin.js "Full Name" "email@example.com" "password123" [admin|staff]'
    );
    process.exit(1);
  }

  const finalRole = role === "staff" ? "staff" : "admin";

  try {
    const [existing] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      console.error(`A user with email "${email}" already exists.`);
      process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, finalRole]
    );

    console.log("Admin user created:");
    console.log({ id: result.insertId, name, email, role: finalRole });
    process.exit(0);
  } catch (err) {
    console.error("Failed to create admin user:", err.message);
    process.exit(1);
  }
}

createAdmin();