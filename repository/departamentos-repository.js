const { Departamento } = require('../models/departamento');

async function getDepartamentos() {
    return Departamento.findAll();
}

async function getDepartamento(id) {
    return Departamento.findByPk(id);
}

async function addDepartamento(departamento) {
    const newDepartamento = await Departamento.create({
        nome: departamento.nome
    });
    return newDepartamento;
}

async function deleteDepartamento(id) {
    return Departamento.destroy({ where: { id } });
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