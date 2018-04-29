import { setupMenu } from '../../controllers';

export default app => app.post('/menu', setupMenu);
