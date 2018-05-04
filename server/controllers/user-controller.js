import bcrypt from 'bcrypt';
import { user as User, Sequelize } from '../models';
import { respond } from '../helpers';

const { Op } = Sequelize;

export default class {
  static signup (req, res) {

    return User.findOrCreate({
      where: {
        [Op.or]: [
          {
            username: req.body.username,
          }, {
            email: req.body.email,
          }
        ]
      },
      defaults: {
        password: req.body.password,
        username: req.body.username,
        email: req.body.email,
      },
      attributes: {
        exclude: ['password'],
      },
    })
    .then(([user, created]) => {
      if (created) {
        return respond({
          res, msg: 'success', user, status: 201,
        });
      }

      return respond({
        res, msg: 'fail, username or email already exists', status: 400,
      });
    })
    .catch((e) => {
      throw e;
    });
  }

  static login (req, res, next) {
    return User.findOne({
      where: {
        [Op.or]: [
          { username: req.body.username },
          { email: req.body.email },
        ],
      }
    })
    .then((user) => {
      return Promise.all([
        // user.password throws if user is null
        bcrypt.compare(req.body.password, user.password),
        user,
      ]);
    })
    .then(([valid, user]) => {
      if (valid && user) {
        req.user = user;
        return next();
      }
      return respond({
        res, msg: 'fail', status: 400, info: 'password not correct',
      });
    })
    .catch((e) => {
      if (e instanceof TypeError && res.writable) {
        return respond({
          res, msg: 'fail', status: 400, info: 'no such user',
        });
      }
      throw e;
    });
  }

  static loginSuccess (req, res) {
    return respond({
      res, msg: 'success', status: 200, info: `logged in as ${req.user.get('username')}`,
    });
  }

  static landing (req, res) {
    return res.send({
      msg: 'Welcome to our revolutionary booking api',
    });
  }
}
