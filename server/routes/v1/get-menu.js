import { getMenu } from '../../controllers/menu-controller';

export default app => app.get('/menu', getMenu);
