export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    day: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
  }, {});

  Menu.associate = function (models) {
    // a menu can have many meals and a meal can be in many menus
    Menu.belongsToMany(models.meal, {
      through: models['meal_menu'],
    });

    // a menu belongs to a single admin
    Menu.belongsTo(models.user);
  };
  return Menu;
}
