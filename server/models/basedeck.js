'use strict';
module.exports = (sequelize, DataTypes) => {
  var BaseDeck = sequelize.define('BaseDeck', {
    suffix: DataTypes.BOOLEAN,
    title: DataTypes.STRING
  }, {});
  BaseDeck.associate = function(models) {
      BaseDeck.hasMany(models.Card, {
          foreignKey: 'deckId',
          as: 'cards'
      });
    // associations can be defined here
  };
  return BaseDeck;
};
