import { getMeals } from '../../controllers';

export default app => app.get('/meals', getMeals);
