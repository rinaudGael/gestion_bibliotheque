const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    // 🔹 Total livres (somme des quantités)
    const [books] = await db
      .promise()
      .query("SELECT SUM(quantite) AS totalBooks FROM livre");

    // 🔹 Total utilisateurs
    const [users] = await db
      .promise()
      .query("SELECT COUNT(*) AS totalUsers FROM users");

    // 🔹 Emprunts en cours
    const [loans] = await db
      .promise()
      .query(
        "SELECT COUNT(*) AS currentLoans FROM emprunts WHERE returned = 0"
      );

    // 🔹 Emprunts par mois
    const [loansPerMonth] = await db.promise().query(`
      SELECT 
        MONTHNAME(created_at) AS month,
        COUNT(*) AS loans
      FROM emprunts
      GROUP BY MONTH(created_at)
      ORDER BY MONTH(created_at)
    `);

    // 🔹 Livres par catégorie
    const [booksPerCategory] = await db.promise().query(` SELECT categories, SUM(quantite) AS count FROM livre GROUP BY categories `);

    // 🔹 Utilisateurs vs emprunts
    const [usersVsLoans] = await db.promise().query(` SELECT  MONTHNAME(e.created_at) AS name, COUNT(DISTINCT e.user_id) AS users, COUNT(*) AS loans FROM emprunts e GROUP BY MONTH(e.created_at) ORDER BY MONTH(e.created_at) `);

    res.json({
      totalBooks: books[0]?.totalBooks || 0,
      totalUsers: users[0]?.totalUsers || 0,
      currentLoans: loans[0]?.currentLoans || 0,
      loansPerMonth,
      booksPerCategory,
      usersVsLoans,
 });
  } catch (err) {
    console.error("Erreur statistics :", err);
    res.status(500).json({ message: "Erreur statistiques" });
  }
});

module.exports = router;
