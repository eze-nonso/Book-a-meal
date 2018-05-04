import jwt from 'jsonwebtoken';


export default (req, res, next) => {
  const token = jwt.sign({
    user: req.body.username || req.body.email,
  }, process.env.SECRET, {
    expiresIn: 86400,
  });

  res.set('x-access-token', token);
  next();
};
