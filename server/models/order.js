import { dummyMenus } from './menus';

import { checkDay } from '../helpers';

export const dummyOrders = [
  {
    id: 1,
    meal: {
      id: 1,
      name: 'Rice and Stew',
      description: 'Lorem ipsum',
      image: '../img2.jpg',
    },
    mealTime: 'breakfast',
  },
  {
    id: 2,
    meal: {
      id: 2,
      name: 'Jollof rice',
      description: 'Valued meal in Africa',
      image: '../img.jpg',
    },
    mealTime: 'lunch',
  },
];

export class OrderModel {
  constructor(mealId, mealTime, update, order) {

    // select particulars days menu from dummyMenus
    const  today = (new Date().toJSON());
    let todayMenu;

    dummyMenus.forEach((key, menu) => {
      if (checkDay(menu.date, today)) {
        todayMenu = menu;
        menu.meals.forEach((key, meal) => {
          if (meal.id === mealId) {
            this.meal = meal;
          }
        });
      }
    });


    switch (mealTime) {
      case '1':
        this.mealTime = 'breakfast';
        break;
      case '2':
        this.mealTime = 'lunch';
        break;
      case '3':
        this.mealTime = 'dinner';
        break;
      default:
        this.mealTime = 'unspecified';
    }

    if (this.meal) {
      if (update && order) {
        // find the particular order
        for (let i = 0; i < dummyOrders.length; i += 1) {
          this.id = order.id;
          if (dummyOrders[i].id == order.id) {
            dummyOrders[i] = this;
          }
        }
      } else {
        // not an update
        this.id = dummyOrders.length + 1;

        dummyOrders.push(this);
      }
    } else {
      delete this.mealTime;
    }
  }
}
