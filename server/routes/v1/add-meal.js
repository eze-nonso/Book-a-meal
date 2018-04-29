import { addMeal } from '../../controllers';

export default app => app.post('/meals', addMeal);
