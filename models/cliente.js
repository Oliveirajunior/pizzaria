'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Pedido, { foreignKey: 'id_cliente', as: 'pedidos' })
    }
  }
  Cliente.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING
    },
    {
      sequelize,
      tableName: 'Clientes'
    }
  )
  return Cliente
}
