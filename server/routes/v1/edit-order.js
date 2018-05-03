import { updateOrder as editOrder } from '../../controllers/order-controller';

export default app => app.put('/orders/:id', editOrder);
