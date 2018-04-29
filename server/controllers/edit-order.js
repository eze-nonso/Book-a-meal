import { Order, dummyOrders } from '../models/order';

import { respond } from '../helpers';

export default (req, res) => {
  const id = +req.params.id;

  const order = dummyOrders[id];

  let mealTime;
  let mealId;
  let msg;
  let updatedOrder;

  if (order) {
    msg = 'success';

    mealId = req.body.mealId
      ? req.body.mealId
      : order.meal.id;

    if (req.body.mealTime) {
      ({ mealTime } = req.body);
    } else {
      switch (order.meal.mealTime) {
        case 'morning':
          mealTime = 1;
          break;
        case 'afternoon':
          mealTime = 2;
          break;
        case 'evening':
          mealTime = 3;
          break;
        default:
          mealTime = 'unspecified';
      }
    }

    updatedOrder = new Order(mealId, mealTime);
  } else {
    msg = 'requested resource does not exist';
  }

  respond({
    res, msg, order: updatedOrder || null, id: updatedOrder? updatedOrder.id: null, status: 200,
  });
};
