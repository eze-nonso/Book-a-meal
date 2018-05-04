import { dummyMenus, MenuModel } from '../models';

import { respond, checkDay } from '../helpers';

export default class Menu {
  static getMenu (req, res) {
    const msg = 'success';

    const date = (new Date()).toJSON();
    let currentMenu;

    dummyMenus.forEach((id, menu) => {
      const date2 = menu.date;
      if (checkDay(date2, date)) {
        currentMenu = menu;
      }
    });

    respond({
      res, msg, date, menu: currentMenu, status: 200,
    });
  }

  static setupMenu (req, res) {
    const menuArr = [];

    Object.keys(req.body).forEach((key, id) => {
      menuArr.push(+id);
    });


    const menu = new MenuModel(menuArr);

    if (menu.meals.length) {
      dummyMenus.push(menu);


      return respond({
        res, msg: 'success', menu, status: 201,
      });
    }

    respond({
      res, msg: 'meals not found', status: 400,
    });

  }
}
