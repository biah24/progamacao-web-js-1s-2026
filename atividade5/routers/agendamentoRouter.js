//declarar rotas

const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');
const usuarioController = require('../controllers/usuarioController');


router.get("/", usuarioController.verificarAutenticacao, agendamentoController.getIndex);
router.get("/agendamentos", agendamentoController.getAgendamentos);
router.post('/agendamento', agendamentoController.postAgendamento);

module.exports = router;