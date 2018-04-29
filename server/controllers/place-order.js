import { Order } from '../models/order';

import { respond } from '../helpers';

export default (req, res) => {

  const order = new Order(req.body.mealId, req.body.mealTime);

  const msg = order.meal
  ? 'success'
  : 'requested meal not available';

  const status = order.meal
  ? 201
  : 400;

  respond({
    res, msg, id: order.id, order, status,
  });
};
