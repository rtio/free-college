const { getAlunos } = require('../repository/alunos-repository');
const express = require('express')
const router = express.Router()

// GET /alunos
router.get('/', async (req, res) => {
    res.json(await getAlunos());
});

module.exports = router;