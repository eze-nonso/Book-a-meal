import { deleteMeal } from '../../controllers';

export default app => app.delete('/meals/:id', deleteMeal);
