import { dummyMeals } from '../models/meals';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  respond({
    res, msg, meals: dummyMeals, status: 200,
  });
};
