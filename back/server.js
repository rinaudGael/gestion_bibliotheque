const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

const users = require('./routes/users');
const login = require('./routes/login');
const signup = require('./routes/signup');
const livres = require('./routes/livres');
const statistics = require('./routes/statistics');
const emprunt = require('./routes/emprunts');
const prets = require('./routes/prets');
app.use('/statistics', statistics);
app.use('/users',users);
app.use('/api',login);
app.use('/api', signup);
app.use('/livres', livres);
app.use('/emprunt' , emprunt);
app.use('/prets',prets);

app.listen(5001 , ()=>{
    console.log(`Serveur lancer au port 5001`);
    
})