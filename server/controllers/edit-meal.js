import { Meal, dummyMeals } from '../models/meals';

import { respond } from '../helpers';

export default (req, res) => {
  const id = req.params['id'] - 1;

  const meal = dummyMeals[id];

  Object.keys(req.body).forEach((key) => {
    const value = req.body[key];

    if (meal[key]) {
      meal[key] = value;
    }
  });

  const msg = 'success';

  respond({
    res, msg, meal, id: meal.id,
  });
};
