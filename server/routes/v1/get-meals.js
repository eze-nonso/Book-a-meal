import { getMeals } from '../../controllers/meal-controller';

export default app => app.get('/meals', getMeals);
