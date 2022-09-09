const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class House extends Model {}

House.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      owner_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5]
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'house'
    }
  );
  
  module.exports = House;

