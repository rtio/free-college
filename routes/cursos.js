const {
    getCursos,
    getCurso,
    addCurso,
    deleteCurso,
    editCurso
} = require('../repository/cursos-repository');
const express = require('express')
const router = express.Router()

// GET /cursos
// curl --request GET \
//  --url http://localhost:3000/cursos \
//  --header 'User-Agent: insomnia/8.2.0'
router.get('/', async (req, res) => {
    res.json(await getCursos());
});

// GET /cursos/:id
// curl --request GET \
//   --url http://localhost:3000/cursos/15 \
//   --header 'User-Agent: insomnia/8.2.0'
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const curso = await getCurso(id);
    console.log(curso);
    if (curso) {
        res.json(curso);
    } else {
        res.status(404);
        res.json();
    }
});

// POST /cursos
// curl --request POST \
//  --url http://localhost:3000/cursos \
//  --header 'Content-Type: application/json' \
//  --header 'User-Agent: insomnia/8.2.0' \
//  --data '{
// 	"nome": "Curso 1"
// }'
router.post('/', async (req, res) => {
    const curso = req.body;
    const result = await addCurso(curso);

    res.status(201);
    res.json(result);
});

// DELETE /cursos/:id
// curl --request DELETE \
//   --url http://localhost:3000/cursos/16 \
//   --header 'User-Agent: insomnia/8.2.0'
router.delete('/:id', async (req, res) => {
    await deleteCurso(req.params.id);
    res.status(204);
    res.json();
});

// UPDATE /cursos/:id
// curl --request PUT \
//   --url http://localhost:3000/cursos/14 \
//   --header 'Content-Type: application/json' \
//   --header 'User-Agent: insomnia/8.2.0' \
//   --data '	{
// 		"nome": "Jack4",
// 		"email": "jack4@mail.com"
// 	}'
router.put('/:id', async (req, res) => {
    const curso = req.body;
    curso.id = req.params.id;

    const editedCurso = await editCurso(curso);

    res.json(editedCurso);
});

module.exports = router;