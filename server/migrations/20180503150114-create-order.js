export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meal_time: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'shuffler',
          },
          field: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      meal_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'meals',
            schema: 'shuffler',
          },
          field: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      schema: 'shuffler',
    })
    .then(() => {
      return queryInterface.addConstraint({
        tableName: 'orders',
        schema: 'shuffler',
      }, ['meal_time'], {
        type: 'check',
        where: {
          meal_time: [
            'Breakfast', 'Lunch', 'Dinner',
          ],
        }
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: 'orders',
      schema: 'shuffler',
    });
  }
};
