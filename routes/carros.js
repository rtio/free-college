const { carros } = require('../db');
const express = require('express')
const router = express.Router()

// GET /carros
router.get('/', (req, res) => {
    res.json(carros);
});

// GET /carros/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const carro = carros.find(p => p.id == id);
    if (carro) {
      return res.json(carro);
    }
    res.status(404);
    res.json();
});

module.exports = router;