import { signup } from '../../controllers';
import authController from '../../auth/authController';
import validate from '../../middlewares/validate.signup';
import encrypt from '../../middlewares/encrypt';
import validationHandle from '../../middlewares/validationHandle';

export default app => app.post(
  '/signup',
  // express validator
  validate(),
  // set validated to req.body.user
  validationHandle,
  // set token to res header
  authController,
  // hash req.body.valid.password
  encrypt,
  // save and send details to user
  signup,
);
