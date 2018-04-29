import { Meal, dummyMeals } from '../models/meals';

import { respond } from '../helpers';

export default (req, res) => {
  const id = req.params['id'] - 1;

  if (dummyMeals[id]) {

    const msg = 'success';

    const deleted = dummyMeals.splice(id, 1)[0];

    const id = deleted.id;

    const status = 200;

  } else {
    const msg = 'requested resource not found';

    const status = 400;
  }

  respond({
    res, msg, deleted: deleted || null, id: id || null,
    status,
  });
};
