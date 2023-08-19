'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reminder extends Model {
    static associate() {}
  }
  Reminder.init(
    {
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      deadline: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Reminder',
    },
  );
  return Reminder;
};
