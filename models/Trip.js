const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    traveler_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    traveler_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'traveler',
        key: 'id'
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
        unique: false,
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Trip',
  }
);

module.exports = Trip;