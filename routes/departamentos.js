const {
    getDepartamentos,
    getDepartamento,
    addDepartamento,
    deleteDepartamento,
    editDepartamento
} = require('../repository/departamentos-repository');
const express = require('express')
const router = express.Router()

// GET /departamentos/cursos
// curl --request GET \
//  --url http://localhost:3000/departamentos/cursos \
//  --header 'User-Agent: insomnia/8.2.0'
router.get('/', async (req, res) => {
    res.json(await getDepartamentos());
});

// GET /departamentos/:id
// curl --request GET \
//   --url http://localhost:3000/departamentos/15 \
//   --header 'User-Agent: insomnia/8.2.0'
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const departamento = await getDepartamento(id);
    if (departamento) {
        res.json(departamento);
    } else {
        res.status(404);
        res.json();
    }
});

// POST /departamentos
// curl --request POST \
//  --url http://localhost:3000/departamentos \
//  --header 'Content-Type: application/json' \
//  --header 'User-Agent: insomnia/8.2.0' \
//  --data '{
// 	"nome": "Biologia"
// }'
router.post('/', async (req, res) => {
    const departamento = req.body;
    const result = await addDepartamento(departamento);

    res.status(201);
    res.json(result);
});

// DELETE /departamentos/:id
// curl --request DELETE \
//   --url http://localhost:3000/departamentos/16 \
//   --header 'User-Agent: insomnia/8.2.0'
router.delete('/:id', async (req, res) => {
    await deleteDepartamento(req.params.id);
    res.status(204);
    res.json();
});

// UPDATE /departamentos/:id
// curl --request PUT \
//   --url http://localhost:3000/departamentos/14 \
//   --header 'Content-Type: application/json' \
//   --header 'User-Agent: insomnia/8.2.0' \
//   --data '	{
// 		"nome": "Matematica"
// 	}'
router.put('/:id', async (req, res) => {
    const departamento = req.body;
    departamento.id = req.params.id;

    const editedDepartamento = await editDepartamento(departamento);

    res.json(editedDepartamento);
});

module.exports = router;