import { Menu } from '../models/menus';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  let menuArr = [];

  Object.keys(req.body).forEach(function (key) {
    menuArr.push(req.body.key);
  });

  const { menu } = new Menu(menuArr);


  respond({
    res, msg, menu, status: 201,
  });
};
