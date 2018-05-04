import { login, loginSuccess } from '../../controllers/user-controller';
import authController from '../../auth/authController';
import validate from '../../middlewares/validate.login';
import validationHandle from '../../middlewares/validationHandle';

export default app => app.post(
  '/auth/login', validate(), validationHandle, login, authController, loginSuccess
);
