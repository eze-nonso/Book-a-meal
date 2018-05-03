import { updateMeal as editMeal } from '../../controllers/meal-controller';

export default app => app.put('/meals/:id', editMeal);
