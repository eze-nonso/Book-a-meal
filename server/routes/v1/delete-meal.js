import { deleteMeal } from '../../controllers/meal-controller';
import authenticate from '../../auth/authenticate';

export default app => app.delete('/meals/:id', authenticate, deleteMeal);
