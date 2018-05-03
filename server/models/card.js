'use strict';
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define('Card', {
    translation: DataTypes.STRING,
    cardNumber: DataTypes.INTEGER
  }, {});
  Card.associate = function(models) {
      Card.belongsTo(models.BaseDeck, {
          foreignKey: 'deckId',
          onDelete: 'CASCADE'
      });
    // associations can be defined here
  };
  return Card;
};
