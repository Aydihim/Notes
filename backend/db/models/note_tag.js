'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note_tag extends Model {
    static associate({ Note, Tag }) {
      this.belongsTo(Note, { foreignKey: 'note_id' });
      this.belongsTo(Tag, { foreignKey: 'tag_id' });
    }
  }
  Note_tag.init(
    {
      note_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Notes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      tag_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Note_tag',
    },
  );
  return Note_tag;
};
