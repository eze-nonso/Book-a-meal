import { Menu, dummyMenus } from '../models/menus';

import { respond } from '../helpers';

export default (req, res) => {
  const msg = 'success';

  const menuArr = [];

  Object.keys(req.body).forEach((key) => {
    menuArr.push(+req.body[key]);
  });


  const { menu } = new Menu(menuArr);

  dummyMenus.splice(0);

  for (let i = 0; i < menu.length; i += 1) {
    dummyMenus.push(menu[i]);
  }


  respond({
    res, msg, menu, status: 201,
  });
};
