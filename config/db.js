const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'devuser',
    password: '2424',
    database: 'agriculture'
});

connection.connect(err => {
    if (err) {
        console.error('❌ Erreur de connexion à MySQL :', err);
        return;
    }
    console.log('✅ Connecté à la base de données MySQL');
});

module.exports = connection;
