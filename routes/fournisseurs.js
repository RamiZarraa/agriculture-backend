const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obtenir tous les fournisseurs
router.get('/', (req, res) => {
db.query('SELECT * FROM Fournisseurs', (err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
});

// Ajouter un fournisseur
router.post('/', (req, res) => {
const { nom, adresse, telephone } = req.body;
db.query('INSERT INTO Fournisseurs (nom, adresse, telephone) VALUES (?, ?, ?)',
[nom, adresse, telephone], (err, results) => {
if (err) return res.status(500).json(err);
res.json({ id: results.insertId, nom, adresse, telephone });
});
});

module.exports = router;