const { Departamentos } = require('../models');

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
    const departamento = await getDepartamento(departamento.id);
    if (!departamento) {
        throw new Error('Departamento não encontrado');
    }
    departamento.nome = departamento.nome;
    await departamento.save();
    return departamento;
}

module.exports = {
    getDepartamentos,
    getDepartamento,
    addDepartamento,
    deleteDepartamento,
    editDepartamento
}