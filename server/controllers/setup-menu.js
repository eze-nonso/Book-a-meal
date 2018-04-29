import { Menu , dummyMenus } from '../models/menus';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  const menu = (new Menu(req.body)).menu;


  respond({
    res, msg, menu, status: 201,
  });
};
