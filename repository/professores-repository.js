const { Professor } = require('../models/professor');

async function getProfessores() {
    return Professor.findAll({ attributes: ['id', 'nome'] });
}

async function getProfessoresCursos() {
    try {
        const professores = await Professor.findAll({ attributes: ['id', 'nome'] });

        for (const professor of professores) {
            const cursos = await professor.getCursos();
            professor.dataValues.cursos = cursos;
        }

        return professores;
    } catch (error) {
        throw new Error('Erro ao buscar alunos e cursos: ' + error.message);
    }
}

async function getProfessor(id) {
    return Professor.findByPk(id, { attributes: ['id', 'nome'] });
}

async function addProfessor(professor) {
    try {
        const newProfessor = await Professor.create({
            nome: professor.nome,
            departamento_id: professor.departamento_id 
        });
        console.log('New Professor:', newProfessor); // Add this logging statement
        return newProfessor;
    } catch (error) {
        console.error('Error creating professor:', error);
        throw error;
    }
}

async function deleteProfessor(id) {
    return Professor.destroy({ where: { id } });
}

async function editProfessor(professor) {
    try {
        const updatedProfessor = await Professor.findByPk(professor.id);
        if (!updatedProfessor) {
            throw new Error('Professor não encontrado');
        }
        updatedProfessor.nome = professor.nome;
        await updatedProfessor.save();
        return updatedProfessor;
    } catch (error) {
        throw new Error('Erro ao atualizar professor: ' + error.message);
    }
}

module.exports = {
    getProfessores,
    getProfessoresCursos,
    getProfessor,
    addProfessor,
    deleteProfessor,
    editProfessor
}