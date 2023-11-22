const { Alunos,Cursos } = require('../models/models'); 

async function getAlunos() {
    return Alunos.findAll({ attributes: ['id', 'nome', 'email'] });
}

async function getAlunosCursos() {
    try {
      const alunos = await Alunos.findAll({ attributes: ['id', 'nome'] });
  
      for (const aluno of alunos) {
        const matriculas = await aluno.getMatriculas({ include: Cursos });
        aluno.dataValues.matriculas = matriculas;
      }
  
      return alunos;
    } catch (error) {
      throw new Error('Erro ao buscar alunos e cursos: ' + error.message);
    }
  }

async function getAlunoCursos(id) {
  try {
    const aluno = await Alunos.findByPk(id, { attributes: ['id', 'nome'] });

    if (!aluno) {
      throw new Error('Aluno não encontrado');
    }

    const matriculas = await aluno.getMatriculas({ include: Cursos });
    aluno.dataValues.matriculas = matriculas;

    return aluno;
  } catch (error) {
    throw new Error('Erro ao buscar aluno e cursos por ID: ' + error.message);
  }
}
async function getAluno(id) {
    return Alunos.findByPk(id, { attributes: ['id', 'nome', 'email'] });
}

async function addAluno(aluno) {
    try {
            const newAluno = await Alunos.create({ nome: aluno.nome, email: aluno.email });
            console.log('New Aluno:', newAluno); // Add this logging statement
            return newAluno;
    } catch (error) {
            console.error('Error creating aluno:', error);
            throw error; 
    }
}


async function deleteAluno(id) {
    return Alunos.destroy({ where: { id } });
}

async function editAluno(aluno) {
    try {
        const updatedAluno = await Alunos.findByPk(aluno.id);

        if (updatedAluno) {
            updatedAluno.nome = aluno.nome;
            updatedAluno.email = aluno.email;
            await updatedAluno.save();
            return updatedAluno;
        } 
    } catch (error) {
        console.error("Erro ao editar aluno:", error);
        throw error;
    }
}

module.exports = {
    getAlunos,
    addAluno,
    getAluno,
    deleteAluno,
    editAluno,
    getAlunosCursos,
    getAlunoCursos,
};
