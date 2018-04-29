import { placeOrder } from '../../controllers';

export default app => app.post('/orders', placeOrder);
