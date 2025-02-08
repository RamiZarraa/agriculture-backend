require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'devuser',
    password: process.env.DB_PASSWORD || '2424',
    database: process.env.DB_NAME || 'agriculture'
});

connection.connect(err => {
    if (err) {
        console.error('❌ Erreur de connexion à MySQL :', err);
        return;
    }
    console.log('✅ Connecté à la base de données MySQL');
});

module.exports = connection;
