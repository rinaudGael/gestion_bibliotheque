const express  = require("express");
const router = express.Router();
const bd = require('../db');

//GET 
router.get("/",(req,res) => {
    bd.query("SELECT * FROM livre ORDER BY id DESC", (err,result)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(result)
    });
});

router.post("/",(req,res)=>
{
    const { title, author, category, quantity } = req.body;
    bd.query("INSERT INTO livre (titre, auteur, categories, quantite) VALUES (?, ?, ?, ?)", 
    [title, author, category, quantity], 
    (err,result)=>{
        if(err) return res.status(500).json(err);
        return res.status(201).json({ message: "Livre ajouté avec succès", id: result.insertId });
    });
});

router.put("/:id",(req,res)=>{
    const { id } = req.params;
    const { title, author, category, quantity } = req.body;
    bd.query("UPDATE livre SET titre = ?, auteur = ?, categories = ?, quantite = ? WHERE id = ?", 
    [title, author, category, quantity, id], 
    (err,result)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json({ message: "Livre mis à jour avec succès" });
    });

});

router.delete("/:id",(req,res)=>{
    const { id } = req.params;
    bd.query("DELETE FROM livre WHERE id = ?", 
    [id], 
    (err,result)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json({ message: "Livre supprimé avec succès" });
    });
});

module.exports = router;