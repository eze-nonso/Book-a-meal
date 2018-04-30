

# Book-a-meal

<p style='text-align:center;'>
  <a href='https://coveralls.io/github/eze-nonso/Book-a-meal?branch=develop'><img src='https://coveralls.io/repos/github/eze-nonso/Book-a-meal/badge.svg?branch=develop' alt='Coverage Status' /></a>

  <a href='https://travis-ci.org/eze-nonso/Book-a-meal'><img src='https://travis-ci.org/eze-nonso/Book-a-meal.svg?branch=develop' alt='Travis build' /></a>

  <a href="https://codeclimate.com/github/eze-nonso/Book-a-meal/maintainability"><img src="https://api.codeclimate.com/v1/badges/0c202bc83ef91655c1a3/maintainability" /></a>

  <a href="https://codeclimate.com/github/eze-nonso/Book-a-meal/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0c202bc83ef91655c1a3/test_coverage" /></a>
</p>

Book-A-Meal-App is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
* [NodeJS](https://nodejs.org/) - Server Environment
* [Npm](https://www.npmjs.com/) - Package manager
* [Express](https://www.express.com/) - Server framework


### Installing
1. Navigate to a local directory and run

```Shell
$ git clone https://github.com/eze-nonso/Book-a-meal.git
```
2. Navigate to created folder and install dependencies

```Shell
$ cd Book-A-meal
$ npm install
```

3. Create a .env file in root folder with test and JWT data.

```Shell
$ echo SECRET=top secret>.env
$ echo VERSION=v1>>.env
```
Or use a text editor of choice to setup SECRET and VERSION variables.

### Running the tests
To run the test and view a summary of test coverage, run
`npm run test -- --exit`


#### Tests breakdown

| Action        | Route          | Resource  |
| ------------- |:-------------:| :----------:|
| **GET**     | `/meals/` | Get all the meal options |
| **POST**      | `/meals/`      |   Add a meal option |
| **PUT** | `/meals/<mealId>`    |    Update the information of a meal option
| **DELETE**  | `/meals/<mealId>` | Remove a meal option
| **POST**  | `/menu/`  | Setup the menu for the day
| **GET** | `/menu/` | Get the menu for the day
| **POST** | `/orders/` | Select the meal option from the menu
| **PUT** | `/orders/<orderId>`  | Modify an order
| **GET** | `/orders/` | Get all the orders


#### Coding style
Linting tool - [Eslint](https://eslint.org/ "Eslint homepage")


 - Extends - [Airbnb style guide](https://github.com/airbnb/javascript)

To lint,
```Bash
$ npm run lint:all
> booker@1.0.0 lint:all C:\Users\user\Desktop\Booker
> eslint "server/**/*.js" app.js
```


## Deployment

- [x] UI is currently deployed at: https://eze-nonso.github.io/Book-a-meal/
- [ ] API soon to be deployed on Heroku

## Built Using
* [ECMASCRIPT 6](es6-features.org/) - javascript version
* [Babel](https://babeljs.io/) - ES6 compiler
* [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2165586) - Project management tool

## Version
This project is currently in Version 1

## license
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
