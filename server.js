require('dotenv').config();
// const express = require('express');



const app = require('./src/app.js');



// Importação das Rotas

// Inicialização do Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;