import { landing } from '../../controllers/user-controller';

export default app => app.get('/', landing);
