import jwt from 'jsonwebtoken';
// import { respond } from '../helpers';


export default (req, res, next) => {
  const token = jwt.sign({
    user: req.body.valid.username,
  }, process.env.SECRET, {
    expiresIn: 86400,
  });

  res.set('x-access-token', token);
  next();
}
