'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate({ Note_tag }) {
      this.hasMany(Note_tag, { foreignKey: 'note_id' });
    }
  }
  Note.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      content: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Note',
    },
  );
  return Note;
};
