const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM Produits', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { nom, categorie, prix } = req.body;
    db.query('INSERT INTO Produits (nom, categorie, prix) VALUES (?, ?, ?)',
        [nom, categorie, prix], (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ id: results.insertId, nom, categorie, prix });
        });
});

module.exports = router;
