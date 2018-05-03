import { UserModel } from '../models/user';
import { respond } from '../helpers';

export default class User {
  static signup (req, res) {
    const user = new UserModel(
      req.body.valid.email, req.body.valid.password,
      req.body.valid.username,
    );

    const msg = 'New user account created';

    const status = 201;
    respond({
      res, msg, user, status,
    });
  }

  static landing (req, res) {
    res.send({
      msg: 'Welcome to our revolutionary booking api',
    });
  }
}
