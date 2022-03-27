'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.PizzaPedido, {
        foreignKey: 'id_pizza',
        as: 'pedidos'
      })
    }
  }
  Pizza.init(
    {
      flavor: DataTypes.STRING,
      price: DataTypes.FLOAT
    },
    {
      sequelize,
      tableName: 'Pizzas'
    }
  )
  return Pizza
}
