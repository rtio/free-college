const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'universidade',
 'root',
 '1234',
  {
    host: 'localhost',
    dialect: 'mariadb'
  }
);
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

async function execSql(sql, params) {
  return new Promise((resolve, reject)=>{
      pool.query(sql, params, function (error, results, fields) {
          if (error) {
              return reject(error);
          }
          return resolve(results);
      });
  });
}

module.exports = {
  execSql
};
