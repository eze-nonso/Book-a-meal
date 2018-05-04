export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', {
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  }, {
    // don't really delete meals, so we can have a working order history
    paranoid: true,
  });

  Meal.associate = function (models) {
    // an admin per meal
    Meal.belongsTo(models.user);
    Meal.hasOne(models.order);
    Meal.belongsToMany(models.menu, {
      through: models['meal_menu'],
    });
  };
  return Meal;
}
