import { editOrder } from '../../controllers';

export default app => app.put('/orders/:id', editOrder);
