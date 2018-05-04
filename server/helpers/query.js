
/**
 * @description export for commonly used queries
 * @param {object} req request object
 * @param {symbol} Op Sequelize operators
 * @param {object} User User model
 * @return {promise} promise chain of user query
 */
export default (req, Op, User) => {
  return User.findOne({
    where: {
      [Op.or]: [{
        username: req.decoded,
      }, {
        email: req.decoded,
      }],
    }
  }, {
    attributes: ['id', 'role'],
  });
}
