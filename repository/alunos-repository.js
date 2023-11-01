var conn = require('./conn');

async function getAlunos() {
    return new Promise((resolve, reject)=>{
        conn.connection.query('SELECT id, nome, email FROM Alunos', function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

module.exports = {
    getAlunos
}
