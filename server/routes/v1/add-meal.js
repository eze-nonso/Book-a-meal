import { addMeal } from '../../controllers/meal-controller';

export default app => app.post('/meals', addMeal);
