import { dummyMeals } from '../models/meals';

import { respond } from '../helpers';

export default (req, res) => {
  const id = req.params.id - 1;

  let msg;
  let deleted;
  let delId;
  let status;

  if (dummyMeals[id]) {
    msg = 'success';

    [deleted] = dummyMeals.splice(id, 1);

    delId = deleted.id;

    status = 200;
  } else {
    msg = 'requested resource not found';

    status = 400;
  }

  respond({
    res,
    msg,
    deleted: deleted || null,
    id: delId || null,
    status,
  });
};
