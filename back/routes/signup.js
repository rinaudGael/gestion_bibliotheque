const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

router.post("/signup",async (req,res)=>
{
    const {name,firstname, email, password} = req.body ;

    db.query("SELECT * FROM users WHERE email = ?",[email],async (err,results)=>{
        if(err) return res.status(500).json({message: err});
        if(results.length >0) return res.status(400).json({message : "Utilisateur deja existant"});

        const hashedPassword = await bcrypt.hash(password,10);

        db.query("INSERT INTO users (name,firstname, email, password) VALUES (?,?,?,?)",
        [name,firstname, email, hashedPassword],
        (err,results)=>
        {
            if(err) return res.status(500).json({message: err});
            return res.status(201).json({message : "Utilisateur cree avec succes"});
        });
    });
});


module.exports = router ;