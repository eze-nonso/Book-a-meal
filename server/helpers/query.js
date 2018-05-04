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
