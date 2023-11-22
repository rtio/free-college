const { getAlunos, addAluno, getAluno, deleteAluno, editAluno, getAlunosCursos, getAlunoCursos } = require('../repository/alunos-repository');
const express = require('express')
const router = express.Router()

router.get('/cursos', async (req, res) => {
    res.json(await getAlunosCursos());
});

// GET /alunos
// curl --request GET \
//  --url http://localhost:3000/alunos \
//  --header 'User-Agent: insomnia/8.2.0'
router.get('/', async (req, res) => {
    res.json(await getAlunos());
});

// GET /alunos/:id
// curl --request GET \
//   --url http://localhost:3000/alunos/15 \
//   --header 'User-Agent: insomnia/8.2.0'

router.get('/:id/cursos', async (req, res) => {
    const id = req.params.id;
    const aluno = await getAlunoCursos(id);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404);
        res.json();
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const aluno = await getAluno(id);
    console.log(aluno);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404);
        res.json();
    }
});

// POST /alunos
// curl --request POST \
//   --url http://localhost:3000/alunos \
//   --header 'Content-Type: application/json' \
//   --header 'User-Agent: insomnia/8.2.0' \
//   --data '{
// 	"nome": "Jack2",
// 	"email": "jack@mail.com"
// }'
router.post('/', async (req, res) => {
    const aluno = req.body;
    const result = await addAluno(aluno);

    res.status(201);
    res.json(result);
});

// DELETE /alunos/:id
// curl --request DELETE \
//   --url http://localhost:3000/alunos/16 \
//   --header 'User-Agent: insomnia/8.2.0'
router.delete('/:id', async (req, res) => {
    await deleteAluno(req.params.id);
    res.status(204);
    res.json();
});

// UPDATE /alunos/:id
// curl --request PUT \
//   --url http://localhost:3000/alunos/14 \
//   --header 'Content-Type: application/json' \
//   --header 'User-Agent: insomnia/8.2.0' \
//   --data '	{
// 		"nome": "Jack4",
// 		"email": "jack4@mail.com"
// 	}'
router.put('/:id', async (req, res) => {
        const aluno = req.body;
        aluno.id = req.params.id;

        const editedAluno = await editAluno(aluno);

        res.json(editedAluno);
    
});

module.exports = router;