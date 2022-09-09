const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class House extends Model {};

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
      address_1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
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
      created_by_user_id: {
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

