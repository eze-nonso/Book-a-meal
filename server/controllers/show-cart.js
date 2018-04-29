import { dummyOrders } from '../models/order';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  respond({
    res, msg, orders: dummyOrders, status: 200,
  });
};
