const express = require('express')
const app = express()
const alunosRouter = require('./routes/alunos')
const professoresRouter = require('./routes/professores')
const cursosRouter = require('./routes/cursos')
const matriculasRouter = require('./routes/matriculas')
const departamentosRouter = require('./routes/departamentos')
const port = 3000

app.use(express.json());

// Prefixo da rota de /alunos
app.use('/alunos', alunosRouter);

// Prefixo da rota de /professores
app.use('/professores', professoresRouter);

// Prefixo da rota de /cursos
app.use('/cursos', cursosRouter);

// Prefixo da rota de /matriculas
app.use('/matriculas', matriculasRouter);

// Prefixo da rota de /departamentos
app.use('/departamentos', departamentosRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
