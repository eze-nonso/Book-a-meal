import { signup } from '../../controllers';
import authController from '../../auth/authController';
import validate from '../../middlewares/validate.signup';
import encrypt from '../../middlewares/encrypt';

export default app => app.post('/signup', validate, authController, encrypt, signup);
