import { dummyMeals } from './meals';

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

export class Order {
  constructor(mealId, mealTime) {
    this.meal = dummyMeals[mealId];
    switch (mealTime) {
      case 1:
        this.mealTime = 'breakfast';
        break;
      case 2:
        this.mealTime = 'lunch';
        break;
      case 3:
        this.mealTime = 'dinner';
        break;
      default:
        this.mealTime = 'unspecified';
    }
    this.id = dummyOrders.length + 1;

    dummyOrders.push(this);

  }
}
