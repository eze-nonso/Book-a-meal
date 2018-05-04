import { addMeal, addMealSuccess } from '../../controllers/meal-controller';
import authenticate from '../../auth/authenticate';
import validationHandle from '../../middlewares/validationHandle';
import validate from '../../middlewares/validate.meal';

// only admins
export default app => app.post('/meals', validate(), validationHandle, authenticate, addMeal, addMealSuccess);
