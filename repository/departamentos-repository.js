const { Departamentos } = require('../models/models');

async function getDepartamentos() {
    return Departamentos.findAll();
}

async function getDepartamento(id) {
    return Departamentos.findByPk(id);
}

async function addDepartamento(departamento) {
    const newDepartamento = await Departamentos.create({
        nome: departamento.nome
    });
    return newDepartamento;
}

async function deleteDepartamento(id) {
    return Departamentos.destroy({ where: { id } });
}

async function editDepartamento(departamento) {
    const updatedDepartamento = await getDepartamento(departamento.id);
    if (!updatedDepartamento) {
        throw new Error('Departamento não encontrado');
    }
    updatedDepartamento.nome = updatedDepartamento.nome;
    await updatedDepartamento.save();
    return updatedDepartamento;
}

module.exports = {
    getDepartamentos,
    getDepartamento,
    addDepartamento,
    deleteDepartamento,
    editDepartamento
}