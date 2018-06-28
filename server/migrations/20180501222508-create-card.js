'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      translation: {
        type: Sequelize.STRING
      },
      cardNumber: {
        type: Sequelize.INTEGER
      },
      deckId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BaseDecks',
          key: 'id',
          as: 'cardId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cards');
  }
};
