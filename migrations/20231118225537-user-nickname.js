module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addColumn('users', 'nickname',{"type":Sequelize.DataTypes.STRING}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeColumn('users', 'nickname', {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },
};