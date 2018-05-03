export const dummyMeals = [{
  id: 1,
  name: 'Jollof rice',
  description: 'Valued meal in Africa',
  image: '../img.jpg',
  price: '$20',
}, {
  Id: 2,
  name: 'Rice and Stew',
  description: 'Lorem ipsum',
  image: '../img2.jpg',
  price: '$20',
}];

export class MealModel {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.id = dummyMeals.length + 1;
    this.price = '$16';
    dummyMeals.push(this);
  }
}
