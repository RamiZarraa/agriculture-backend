const express = require('express');
const cors = require('cors');
const produitsRoutes = require('./routes/produits');
const fournisseursRoutes = require('./routes/fournisseurs');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/produits', produitsRoutes);
app.use('/fournisseurs', fournisseursRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur en écoute sur le port ${PORT}`));
