import { deleteMeal } from '../../controllers/meal-controller';

export default app => app.delete('/meals/:id', deleteMeal);
