const express = require("express");
const router = express.Router();
const db = require("../db");
router.get("/", async (req, res) => {
  try {
    const [prets] = await db.promise().query(`
      SELECT e.id, u.nom AS user, l.titre AS book, e.date_emprunt AS dateBorrow, e.date_retour AS dateReturn,
        CASE 
          WHEN e.returned = 1 THEN 'Rendu'
          WHEN e.date_retour < NOW() THEN 'En retard'
          ELSE 'En cours'
        END AS status
      FROM emprunts e
      JOIN users u ON e.user_id = u.id
      JOIN livre l ON e.livre_id = l.id
    `);
    res.json(prets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la récupération des prêts" });
  }
});


module.exports = router;