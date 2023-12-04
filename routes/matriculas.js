const {
    getMatriculas,
    getMatricula,
    addMatricula,
    deleteMatricula
} = require('../repository/matriculas-repository');
const express = require('express')
const router = express.Router()

// GET /matriculas
// curl --request GET \
//  --url http://localhost:3000/matriculas \
//  --header 'User-Agent: insomnia/8.2.0'
router.get('/', async (req, res) => {
    res.json(await getMatriculas());
});

// GET /matriculas/:id
// curl --request GET \
//   --url http://localhost:3000/matriculas/15 \
//   --header 'User-Agent: insomnia/8.2.0'
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const matricula = await getMatricula(id);

    if (matricula) {
        res.json(matricula);
    } else {
        res.status(404);
        res.json();
    }
});

// POST /matriculas
// curl --request POST \
//  --url http://localhost:3000/matriculas \
//  --header 'Content-Type: application/json' \
//  --header 'User-Agent: insomnia/8.2.0' \
//  --data '{
// 	"aluno_id": 1,
//  "curso_id": 1
// }'
router.post('/', async (req, res) => {
    const matricula = req.body;
    const result = await addMatricula(matricula);

    res.status(201);
    res.json(result);
});

// DELETE /matriculas/:id
// curl --request DELETE \
//   --url http://localhost:3000/matriculas/16 \
//   --header 'User-Agent: insomnia/8.2.0'
router.delete('/:id', async (req, res) => {
    await deleteMatricula(req.params.id);
    res.status(204);
    res.json();
});

module.exports = router;