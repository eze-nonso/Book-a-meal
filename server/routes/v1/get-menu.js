import { getMenu } from '../../controllers';

export default app => app.get('/menu', getMenu);
