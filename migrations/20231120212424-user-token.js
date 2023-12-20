module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeColumn('users', 'hash', {transaction});await queryInterface.addColumn('users', 'token',{"type":Sequelize.DataTypes.STRING}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addColumn('users', 'hash',{"type":Sequelize.DataTypes.STRING}, {transaction});await queryInterface.removeColumn('users', 'token', {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },
};