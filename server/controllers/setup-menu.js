import { Menu } from '../models/menus';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  const { menu } = new Menu(req.body);


  respond({
    res, msg, menu, status: 201,
  });
};
