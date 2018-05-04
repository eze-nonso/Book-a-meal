export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meal_menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      meal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'meals',
            schema: 'shuffler',
          },
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      menu_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'menus',
            schema: 'shuffler',
          },
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    }, {
      schema: 'shuffler',
    })
    .then(() => {
      return queryInterface.addConstraint({
        tableName: 'meal_menus',
        schema: 'shuffler',
      }, [
        'meal_id', 'menu_id',
      ], {
        type: 'unique',
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: 'meal_s',
      schema: 'shuffler',
    });
  }
};
