'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PizzaPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Pedido, { foreignKey: 'id_pedido', as: 'pedido' })
      this.belongsTo(models.Pizza, { foreignKey: 'id_pizza', as: 'pizza' })
    }
  }
  PizzaPedido.init(
    {
      id_pedido: DataTypes.INTEGER,
      id_pizza: DataTypes.INTEGER,
      amount: DataTypes.INTEGER
    },
    {
      sequelize,
      tableName: 'PizzaPedidos'
    }
  )
  return PizzaPedido
}
