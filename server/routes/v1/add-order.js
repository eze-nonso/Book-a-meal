import { addOrder } from '../../controllers';

export default app => app.post('/orders', addOrder);
