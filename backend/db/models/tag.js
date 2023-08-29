'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({Note_tag}) {
      this.belongsTo(Note_tag, { foreignKey: 'tag_id' });
    }
  }
  Tag.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Tag',
    },
  );
  return Tag;
};
