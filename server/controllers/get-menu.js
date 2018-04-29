import { Menu , dummyMenus } from '../models/menus';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  const date = (new Date()).toJSON();

  respond({
    res, msg, date, menu: dummyMenus, status: 200,
  });
};
