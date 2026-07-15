const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos en el directorio raíz
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`🚀 Servidor activo de forma local!`);
    console.log(`💻 Escuchando en el puerto: ${PORT}`);
    console.log(`🔗 Abre tu navegador en: http://localhost:${PORT}`);
    console.log(`===================================================`);
});