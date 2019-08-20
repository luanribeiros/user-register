'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    completeName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};