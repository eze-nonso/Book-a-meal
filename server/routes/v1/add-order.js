import { addOrder } from '../../controllers/order-controller';

export default app => app.post('/orders', addOrder);
