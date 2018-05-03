import { showCart } from '../../controllers/order-controller';

export default app => app.get('/orders', showCart);
