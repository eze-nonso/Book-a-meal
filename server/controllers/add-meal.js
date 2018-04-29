import { Meal } from '../models/meals';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  const meal = new Meal(
    req.body.name, req.body.description, req.body.image
  );

  respond({
    res, msg, meal, id: meal.id,
  });
}
