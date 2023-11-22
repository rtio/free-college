const { getProfessores, getProfessoresCursos } = require('../repository/professores-repository');
const express = require('express')
const router = express.Router()

// GET /professores/cursos
// curl --request GET \
//  --url http://localhost:3000/professores/cursos \
//  --header 'User-Agent: insomnia/8.2.0'
router.get('/cursos', async (req, res) => {
    res.json(await getProfessoresCursos());
});

// GET /professores
// curl --request GET \
//  --url http://localhost:3000/professores \
//  --header 'User-Agent: insomnia/8.2.0'
router.get('/', async (req, res) => {
    res.json(await getProfessores());
});

module.exports = router;