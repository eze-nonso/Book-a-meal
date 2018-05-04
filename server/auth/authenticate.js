import jwt from 'jsonwebtoken';
import { respond } from '../helpers';

export default (req, res, next) => {

  const { headers: { 'x-access-token': token } } = req;

  if (!token) {
    return respond({
      res, msg: 'Cannot authenticate login', status: 401,
    });
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.SECRET);
  } catch (e) {
    return respond({
      res, msg: 'Cannot authenticate login', status: 401,
    })
  }

  req.decoded = decoded.user;
  return next();
};
