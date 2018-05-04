import { user as User, meal as Meal, Sequelize, } from '../models';
import { respond, query } from '../helpers';

const { Op } = Sequelize;

export default class Meals {
  static addMeal (req, res, next) {
    return query(req, Op, User)
    .then((user) => {
      if (!user) {
        return respond({
          res, msg: 'no such user', status: 400,
        });
      }

      if (user.get('role') !== 'admin') {
        return respond({
          res, msg: 'cannot add meal', status: 401,
        });
      }

      return Promise.all([
        Meal.create({
          name: req.body.name,
          description: req.body.description,
          image: req.body.image,
          price: req.body.price,
        }), user,
      ]);

    })
    .then(([meal, user]) => {
      if (meal && user) {
        req.meal = meal;
        req.user = user;
        return next();
      }
    });
  }

  static addMealSuccess (req, res) {
    return req.user.addMeal(req.meal)
    .then(() => {
      return req.meal
      .reload();
    })
    .then((meal) => {
      return respond({
        res, msg: 'success', status: 201, meal,
      });
    });
  }

  static deleteMeal (req, res) {
    return query(req, Op, User)
    .then((user) => {
      if (!user) {
        return respond({
          res, status: 400, msg: 'no such user',
        });
      }

      if (user.get('role') !== 'admin') {
        return respond({
          res, status: 401, msg: 'cannot delete meal',
        });
      }

      return user.getMeals({
        where: {
          id: +req.params.id,
        }
      });
    })
    .then(([meal]) => {
      if (meal) {
        return meal.destroy();
      }
      return respond({
        res, status: 400, msg: 'no such meal',
      });
    })
    .then((deleted) => {
      if (deleted) {
        return respond({
          res, status: 200, msg: 'success', deleted,
        });
      }
    });

  }

  static updateMeal (req, res) {
    return query(req, Op, User)
    .then((user) => {
      if (!user) {
        return respond({
          res, status: 400, msg: 'no such user',
        });
      }

      if (user.get('role') !== 'admin') {
        return respond({
          res, status: 401, msg: 'cannot modify meal',
        });
      }

      return user.getMeals({
        where: {
          id: +req.params.id,
        },
      });
    })
    .then((meal) => {
      if (!meal && res.writable) {
        return respond({
          res, msg: 'no such meal', status: 400,
        });
      } else if (meal) {
        return meal.update(req.body, {
          fields: ['name', 'description', 'image', 'price',]
        });
      }

    })
    .then((updated) => {
      if (updated && res.writable) {
        req.updated = updated;
        return respond({
          res, msg: 'success', status: 200, updated,
        });
      }
    });
  }

  static getMeals (req, res, next) {
    return query(req, Op, User)
    .then((user) => {
      if (!user) {
        return respond({
          res, msg: 'no such user', status: 400,
        });
      }

      if (user.get('role') !== 'admin') {
        return respond({
          res, msg: 'cannot get meals', status: 401,
        });
      }

      return user.getMeals();
    })
    .then(([meals]) => {
      if (meals) {
        req.meals = meals;
        return next();
      }
    })
    .catch((e) => {
      throw e;
    });
  }

  static getMealsSuccess (req, res) {
    return respond({
      res, msg: 'success', meals: req.meals, status: 200,
    });
  }
}
