const express = require('express')
const app = express()
const alunosRouter = require('./routes/alunos')
const professoresRouter = require('./routes/professores')
const cursosRouter = require('./routes/cursos')
const port = 3000

app.use(express.json());

// Prefixo da rota de /alunos
app.use('/alunos', alunosRouter);

// Prefixo da rota de /professores
app.use('/professores', professoresRouter);

// Prefixo da rota de /cursos
app.use('/cursos', cursosRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
