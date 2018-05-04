export default (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    meal_time: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isIn: [['Breakfast', 'Lunch', 'Dinner']],
        len: [1, 50],
      },
    },
  }, {});

  Order.associate = function (models) {
    // one meal per order
    Order.belongsTo(models.meal);
    Order.belongsTo(models.user);
  };
  return Order;
}
