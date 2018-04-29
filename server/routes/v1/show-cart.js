import { showCart } from '../../controllers';

export default app => app.get('/orders', showCart);
