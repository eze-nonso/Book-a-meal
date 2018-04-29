import { Meal, dummyMeals } from '../models/meals';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  const meal = new Meal(req.body.name, req.body.description, req.body.image);

  dummyMeals.push(meal);

  respond({
    res, msg, meal, id: meal.id, status: 200,
  });
};
