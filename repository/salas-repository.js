const { Sala } = require('../models/sala');

async function getSalas() {
    return Sala.findAll();
}

async function getSala(id) {
    return Sala.findByPk(id);
}

async function addSala(sala) {
    const newSala = await Sala.create({
        numero: sala.numero,
        capacidade: sala.capacidade,
    });
    return newSala;
}

async function deleteSala(id) {
    return Sala.destroy({ where: { id } });
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