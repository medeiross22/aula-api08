
const pool = require('../database/conexao');

// Controladores vazios prontos para sua futura implementação
const listarServicos = async (req, res) => {
    res.status(501).json({ mensagem: 'Rota não implementada' });
};

const criarServico = async (req, res) => {
    res.status(501).json({ mensagem: 'Rota não implementada' });
};

module.exports = {
    listarServicos,
    criarServico
};