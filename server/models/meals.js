export const dummyMeals = [{
  id: 1,
  name: 'Jollof rice',
  description: 'Valued meal in Africa',
  image: '../img.jpg',
}, {
  Id: 2,
  name: 'Rice and Stew',
  description: 'Lorem ipsum',
  image: '../img2.jpg',
}];

export class Meal {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.id = dummyMeals.length + 1;
  }
}
