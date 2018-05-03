import { MealModel, dummyMeals } from '../models/meals';

import { respond } from '../helpers';

export default class Meals {
  static addMeal (req, res) {
    const msg = 'success';

    const meal = new MealModel(req.body.name, req.body.description, req.body.image);

    respond({
      res, msg, meal, id: meal.id, status: 201,
    });
  }

  static deleteMeal (req, res) {
    const id = req.params.id;

    let msg;
    let deleted;
    let delId;
    let status;

    dummyMeals.forEach((key, meal) => {
      if (meal.id === id) {
        [deleted] = dummyMeals.splice(meal, 1);
      }
    })

    if (deleted) {
      msg = 'success';
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
  }

  static updateMeal (req, res) {
    const id = req.params.id;
    let updateMeal;

    dummyMeals.forEach((key, meal) => {
      if (meal.id === id) {
        updateMeal = meal;
      }
    })

    Object.keys(req.body).forEach((key) => {
      const value = req.body[key];

      if (updateMeal) {
        if (updateMeal[key]) {
          updateMeal[key] = value;
        }
      }
    });

    const msg = 'success';

    respond({
      res, msg, meal, id: meal.id, status: 200,
    });
  }

  static getMeals (req, res) {
    const msg = 'success';

    respond({
      res, msg, meals: dummyMeals, status: 200,
    });
  }
}
