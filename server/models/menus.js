import { dummyMeals } from './meals';

export const dummyMenus = [{
  id: 1,
  meals: dummyMeals,
  date: (new Date('15-02-18')).toJSON(),
}, {
  id: 1,
  meals: dummyMeals,
  date: (new Date('16-02-18')).toJSON(),
}, {
  id: 1,
  meals: dummyMeals,
  date: (new Date('17-02-18')).toJSON(),
}];

export class MenuModel {
  constructor(mealIdList) {
    if (mealIdList instanceof Array) {
      this.meals = [];
      dummyMeals.forEach((id, meal) => {
        if ((mealIdList).includes(meal.id)) {
          this.meals.push(meal);
        }
      });

      if (this.meals.length) {
        this.date = (new Date()).toJSON();
        this.id = dummyMenus.length + 1;
        dummyMenus.push(this);
      }
    }
  }
}
