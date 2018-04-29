import User from '../mock/user';
import { respond } from '../helpers';

export default (req, res) => {
  const user = new User(
    req.body.valid.email, req.body.valid.password,
    req.body.valid.username,
  );

  const msg = 'New user account created';

  const status = 201;
  respond({
    res, msg, user, status,
  });
};
