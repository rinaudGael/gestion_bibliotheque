const express = require('express');
const router = express.Router();
const db = require('../db');
const PDFDocument =  require('pdfkit');
// 📖 Pagination des livres disponibles
router.get('/livres', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const offset = (page - 1) * limit;

    const [total] = await db.promise().query("SELECT COUNT(*) as count FROM livre");
    const totalBooks = total[0].count;

    const [books] = await db.promise().query(
      "SELECT * FROM livre LIMIT ? OFFSET ?",
      [limit, offset]
    );

    res.json({ totalBooks, books, page, totalPages: Math.ceil(totalBooks / limit) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur récupération livres" });
  }
});

// 📝 Emprunter un livre
router.post('/', async (req, res) => {
  const { user_id, livre_id } = req.body;

  try {
    // Vérifier la quantité
    const [livre] = await db.promise().query("SELECT quantite FROM livre WHERE id = ?", [livre_id]);
    if (!livre[0]) return res.status(404).json({ message: "Livre introuvable" });
    if (livre[0].quantite <= 0) return res.status(400).json({ message: "Livre indisponible" });

    // Ajouter l'emprunt
    await db.promise().query(
      "INSERT INTO emprunts (user_id, livre_id, returned) VALUES (?, ?, 0)",
      [user_id, livre_id]
    );

    // Décrémenter le stock
    await db.promise().query(
      "UPDATE livre SET quantite = quantite - 1 WHERE id = ?",
      [livre_id]
    );

    //Gener le PDF 
    const doc = new PDFDocument();
    let buffers = [];
    doc.on('data',buffers.push.bind(buffers));
    doc.on('end',()=>{
      let pdfData = Buffer.contact(buffers);
      res.writeHead(200, {
        'Content-Type':'application/pdf',
        'content-Disposition': `attachment; filename=ticket_${book.titre}.pdf`,
        'Content-Length' : pdfData.length
      });
      res.end(pdfData);

      doc.fontSize(20).text("Ticket d'emprunt ", {align : 'center'});
      doc.moveDown();
      doc.fontSize(16).text(`Livre : ${book.titre}`);
      doc.text(`Auteur : ${book.auteur}`);
      doc.text(`Categorie : ${book.categorie}`);
      doc.text(`Utilisateur ID: ${userId}`);
      doc.text(`Date : ${new Date().toLocaleDateString()}`);
      doc.end();
    });

    res.json({ message: "Emprunt effectué avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de l'emprunt" });
  }
});

module.exports = router;
