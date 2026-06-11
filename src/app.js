const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));


const usuariosRoutes = require('./routes/usuarios.routes');       // Ajuste os caminhos conforme sua estrutura de pastas
const agendamentosRoutes = require('./routes/agendamentos.routes');
const servicosRoutes = require('./routes/servicos.routes');




// Middlewares Globais
app.use(express.json());

// Rota Base / Home
app.get('/', (req, res) => {
  res.send('API organizada funcionando');
});

// Vinculação das Rotas com seus respectivos prefixos
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/agendamentos', agendamentosRoutes);
app.use('/api/servicos', servicosRoutes);

app.use('/api/servicos', servicosRoutes);




module.exports = app;