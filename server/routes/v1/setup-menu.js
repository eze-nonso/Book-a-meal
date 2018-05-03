import { setupMenu } from '../../controllers/menu-controller';

export default app => app.post('/menu', setupMenu);
