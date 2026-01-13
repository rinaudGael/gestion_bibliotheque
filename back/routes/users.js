const express = require('express');
const router = express.Router();
const db = require('../db');


// GET /employes?search=&sort=&order=
router.get("/", (req, res) => {
  const { search, sort, order } = req.query;

  let sql = "SELECT * FROM users WHERE 1=1";
  const params = [];

  // 🔍 Recherche (nom ou email par exemple)
  if (search) {
    sql += " AND (name LIKE ? OR email LIKE ? OR firstname LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
  }

  // 🔃 Tri sécurisé
  const allowedSort = ["name","firstname","email" ];
  if (sort && allowedSort.includes(sort)) {
    sql += ` ORDER BY ${sort} ${order === "desc" ? "DESC" : "ASC"}`;
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
});


// GET /employes/:id
router.get('/:id',(req,res)=>{
    const id = req.params.id ;
    db.query('SELECT * FROM users WHERE id = ?' , [id] , (err,results)=>{
        if(err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).send('Employe nom trouve');
        res.json(results[0]);
    })
})

// POST /employes
router.post('/',(req,res)=>{
    const {nom,prenom,age,email,poste,salaire,id_tache} = req.body;

    db.query('INSERT INTO users (nom, prenom, age, email, poste, salaire,id_tache) VALUES (?, ?, ?, ?, ?, ?) ',[nom, prenom, age, email, poste, salaire],(err,results)=>{
        if(err) return res.status(500).json(err);
        res.status(201).json({message : 'Employe Ajoute'});
    });
});

//PUT — attribuer ou modifier une tâche

router.put('/:id/tache' , (req,res)=>{
    const {id} = req.params;
    const {id_tache} = req.body ;

    db.query('UPDATE employe SET id_tache = ? WHERE id_employe = ?',[id_tache,id],(err,results)=>{
        if(err) return res.status(500).json(err);
        if(results.affectedRows === 0)
            return res.status(404).json({message: 'Employe non trouve'});
        res.json({message: "tache attribuee "});
    });
})

// PUT /employes/:id

router.put('/:id',(req,res)=>{
    const id = req.params.id ;
    const {nom, prenom, age, email, poste, salaire, id_tache } = req.body ;

    db.query('UPDATE employe SET nom=?, prenom=?, age=?, email=?, poste=?, salaire=?, id_tache=? WHERE id_employe = ?',
        [nom, prenom, age, email,poste, salaire, id_tache, id],
        (err,results)=>{
            if(err) return res.status(500).json(err);
            res.json({id: parseInt(id), ...req.body});
        });
});

// DELETE /employes/:id
router.delete('/:id', (req, res) => {
  console.log("DELETE appelé avec id =", req.params.id);

  const id = req.params.id;

  db.query(
    'DELETE FROM users WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        console.log("ERREUR SQL :", err);
        return res.status(500).json(err);
      }

      console.log("Résultat SQL :", results);
      res.status(204).send();
    }
  );
});


module.exports = router;