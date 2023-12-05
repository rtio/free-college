const {
    getSalas,
    getSala,
    addSala,
    deleteSala,
    editSala
} = require('../repository/salas-repository');
const express = require('express')
const router = express.Router()

// GET /salas
// curl --request GET \
//  --url http://localhost:3000/salas \
//  --header 'User-Agent: insomnia/8.2.0'
router.get('/', async (req, res) => {
    res.json(await getSalas());
});

// GET /salas/:id
// curl --request GET \
//   --url http://localhost:3000/salas/15 \
//   --header 'User-Agent: insomnia/8.2.0'
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const sala = await getSala(id);
    if (sala) {
        res.json(sala);
    } else {
        res.status(404);
        res.json();
    }
});

// POST /salas
// curl --request POST \
//  --url http://localhost:3000/salas \
//  --header 'Content-Type: application/json' \
//  --header 'User-Agent: insomnia/8.2.0' \
//  --data '{
// 	"nome": "Biologia"
// }'
router.post('/', async (req, res) => {
    const sala = req.body;
    const result = await addSala(sala);

    res.status(201);
    res.json(result);
});

// DELETE /salas/:id
// curl --request DELETE \
//   --url http://localhost:3000/salas/16 \
//   --header 'User-Agent: insomnia/8.2.0'
router.delete('/:id', async (req, res) => {
    await deleteSala(req.params.id);
    res.status(204);
    res.json();
});

// UPDATE /salas/:id
// curl --request PUT \
//   --url http://localhost:3000/salas/14 \
//   --header 'Content-Type: application/json' \
//   --header 'User-Agent: insomnia/8.2.0' \
//   --data '	{
// 		"nome": "Matematica"
// 	}'
router.put('/:id', async (req, res) => {
    const sala = req.body;
    sala.id = req.params.id;

    const editedSala = await editSala(sala);

    res.json(editedSala);
});

module.exports = router;