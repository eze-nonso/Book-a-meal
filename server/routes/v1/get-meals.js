import { getMeals, getMealsSuccess } from '../../controllers/meal-controller';
import authenticate from '../../auth/authenticate';

export default app => app.get('/meals', authenticate, getMeals, getMealsSuccess);
