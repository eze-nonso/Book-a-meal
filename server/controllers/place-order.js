import { Order } from '../models/order';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  const order = new Order(req.body.mealId, req.body.mealTime);

  respond({
    res, msg, id: order.id, order, status: 201,
  });
};
