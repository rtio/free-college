const express = require('express')
const app = express()
const carrosRouter = require('./routes/carros')
const pessoasRouter = require('./routes/pessoas')
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World!')
})

// Prefixo da rota de carros /carros
app.use('/carros', carrosRouter);

// Prefixo da rota de pessoas /pesssoas
app.use('/pessoas', pessoasRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})