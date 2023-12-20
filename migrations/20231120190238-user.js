module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.changeColumn('users', 'hash',{"type":Sequelize.DataTypes.STRING}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.changeColumn('users', 'hash',{"type":Sequelize.DataTypes.STRING,"allowNull":false}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },
};