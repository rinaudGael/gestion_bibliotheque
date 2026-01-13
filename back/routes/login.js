const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt"); 

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Reçu :", email, password);

  // 1️⃣ Vérifier dans la table admin
  db.query("SELECT * FROM admin WHERE email = ?", [email], async (err, resultsAdmin) => {
    if (err) {
      console.log("Erreur SQL ADMIN :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }

    if (resultsAdmin.length > 0) {
      const admin = resultsAdmin[0];

      return res.status(200).json({
        user: admin,
        role: "admin"
      });
    }

    // 2️⃣ Vérifier dans la table users
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, resultsUsers) => {
      if (err) {
        console.log("Erreur SQL USER :", err);
        return res.status(500).json({ message: "Erreur serveur" });
      }

      if (resultsUsers.length > 0) {
        const user = resultsUsers[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match)
          return res.status(401).json({ message: "Mot de passe incorrect" });

        return res.status(200).json({
          user : user,
          role: "users"
        });
      }

      // Si aucun email trouvé
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    });
  });
});

module.exports = router;
