'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Calendar.init({
    date: DataTypes.STRING,
    day: DataTypes.STRING,
    month: DataTypes.STRING,
    year: DataTypes.STRING,
    time: DataTypes.STRING,
    event: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Calendar',
  });
  return Calendar;
};