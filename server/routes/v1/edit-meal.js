import { editMeal } from '../../controllers';

export default app => app.put('/meals/:id', editMeal);
