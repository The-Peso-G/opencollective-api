module.exports = function(Sequelize, DataTypes) {
  
  var Card = Sequelize.define('Card', {
    number: DataTypes.STRING,
    token: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    }
  });

  return Card;
};
