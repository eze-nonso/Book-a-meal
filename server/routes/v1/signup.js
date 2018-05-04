import { signup } from '../../controllers/user-controller';
import authController from '../../auth/authController';
import validate from '../../middlewares/validate.signup';
import encrypt from '../../middlewares/encrypt';
import validationHandle from '../../middlewares/validationHandle';

export default app => app.post(
  '/auth/signup',
  // express validator
  validate(),
  validationHandle,
  // set token to res header
  authController,
  encrypt,
  // save and send details to user
  signup
);
