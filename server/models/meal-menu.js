export default (sequelize, DataTypes) => {
  const MealMenu = sequelize.define('meal_menu', {}, {});
  MealMenu.associate = function (models) {
    // associations can be defined here
  };
  return MealMenu;
}
