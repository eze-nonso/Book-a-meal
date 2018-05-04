export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 50],
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [1, 50],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAtLeastSix(pwd) {
          if (pwd.length < 6) {
            throw new Error('Password must be greater than 6');
          }
        },
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
      validate: {
        isIn: [['user', 'admin']],
      },
    },
  }, {});

  User.associate = function (models) {
    // for users who are admins
    User.hasMany(models.meal);
    User.hasMany(models.menu);

    // for orders made by user
    User.hasMany(models.order);
  };

  return User;
}
