import { updateMeal as editMeal } from '../../controllers/meal-controller';
import validationHandle from '../../middlewares/validationHandle';
import validate from '../../middlewares/validate.meal-update';
import authenticate from '../../auth/authenticate';

export default app => app.put('/meals/:id', validate(), validationHandle, authenticate, editMeal);
