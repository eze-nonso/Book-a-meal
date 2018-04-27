import User from '../mock/user';
import { respond } from '../helpers';

export default (req, res) => {

  const user = new User(req.body.email, req.body.username, req.body.password);

  const msg = 'Success';

  respond({
    res, msg, user,
  });
};
