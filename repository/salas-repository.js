const { Salas } = require('../models/models');

async function getSalas() {
    return Salas.findAll();
}

async function getSala(id) {
    return Salas.findByPk(id);
}

async function addSala(sala) {
    const newSala = await Salas.create({
        numero: sala.numero,
        capacidade: sala.capacidade,
    });
    return newSala;
}

async function deleteSala(id) {
    return Salas.destroy({ where: { id } });
}

async function editSala(sala) {
    const updatedSala = await getDepartamento(sala.id);
    if (!updatedSala) {
        throw new Error('Sala não encontrado');
    }
    updatedSala.numero = updatedSala.nome;
    updatedSala.capacidade = updatedSala.capacidade;
    await updatedSala.save();
    return updatedSala;
}

module.exports = {
    getSalas,
    getSala,
    addSala,
    deleteSala,
    editSala
}