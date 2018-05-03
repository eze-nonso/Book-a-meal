import { OrderModel, dummyOrders } from '../models/order';

import { respond } from '../helpers';

export default class Order {
  static addOrder (req, res) {
    const order = new OrderModel(req.body.mealId, req.body.mealTime);

    const msg = order.meal
      ? 'success'
      : 'requested meal not available';

    const status = order.meal
      ? 201
      : 400;

    respond({
      res, msg, id: order.id, order, status,
    });
  }

  static updateOrder (req, res) {
    const id = +req.params.id;

    let order;

    for (let i = 0; i < dummyOrders.length; i += 1) {
      if (dummyOrders[i].id == id) {
        order = dummyOrders[i];
      }
    }

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

      updatedOrder = new Order(mealId, mealTime, 'update', order);

      // updatedOrder = Order.update(order);
    } else {
      msg = 'requested resource does not exist';
    }

    respond({
      res, msg, order: updatedOrder || null, id: updatedOrder ? updatedOrder.id : null, status: 200,
    });
  }

  static showCart (req, res) {
    const msg = 'success';

    respond({
      res, msg, orders: dummyOrders, status: 200,
    });
  }
}
