// db.js
const mysql = require('mysql2');

// Crée la connexion
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bibliotheque'
});

// Connecte-toi à MySQL
db.connect((err) => {
  if (err) {
    console.error("Erreur MySQL :", err);
    return;
  }
  console.log("MySQL connecté !");
});

module.exports = db;
