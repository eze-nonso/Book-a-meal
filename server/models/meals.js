export const dummyMeals = [{
  name: 'Jollof rice',
  description: 'Valued meal in Africa',
  image: '../img.jpg',
}, {
  name: 'Rice and Stew',
  description: 'Lorem ipsum',
  image: '../img2.jpg',
}];

export class Meal {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}
