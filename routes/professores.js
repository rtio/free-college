const {
    getProfessores,
    getProfessoresCursos,
    getProfessor,
    addProfessor,
    deleteProfessor,
    editProfessor
} = require('../repository/professores-repository');
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

// GET /professores/:id
// curl --request GET \
//   --url http://localhost:3000/professores/15 \
//   --header 'User-Agent: insomnia/8.2.0'
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const professor = await getProfessor(id);
    console.log(professor);
    if (professor) {
        res.json(professor);
    } else {
        res.status(404);
        res.json();
    }
});

// POST /professores
// curl --request POST \
//  --url http://localhost:3000/professores \
//  --header 'Content-Type: application/json' \
//  --header 'User-Agent: insomnia/8.2.0' \
//  --data '{
// 	"nome": "Professor 1"
// }'
router.post('/', async (req, res) => {
    const professor = req.body;
    const result = await addProfessor(professor);

    res.status(201);
    res.json(result);
});

// DELETE /professores/:id
// curl --request DELETE \
//   --url http://localhost:3000/professores/16 \
//   --header 'User-Agent: insomnia/8.2.0'
router.delete('/:id', async (req, res) => {
    await deleteProfessor(req.params.id);
    res.status(204);
    res.json();
});

// UPDATE /professores/:id
// curl --request PUT \
//   --url http://localhost:3000/professores/14 \
//   --header 'Content-Type: application/json' \
//   --header 'User-Agent: insomnia/8.2.0' \
//   --data '	{
// 		"nome": "Jack4",
// 		"email": "jack4@mail.com"
// 	}'
router.put('/:id', async (req, res) => {
    const professor = req.body;
    professor.id = req.params.id;

    const editedAluno = await editProfessor(professor);

    res.json(editedAluno);
});

module.exports = router;