import testSetup from '../testsetup';

import { checkDay } from '../../server/helpers';

const {
  expect,
} = testSetup;

const date1 = '1998-10-22',
date2 = (new Date(date1).toJSON()),
date3 = 'hello',
date4 = '1983-01-17',
date5 = (new Date().toJSON()),
date6 = [];


suite('Function to compare date strings', function () {
  test('Expect checkDay to return true for similar days', function () {
    expect(checkDay(date1, date2)).to.be.true;
  });

  test('Expect Checkday to return false for dissimilar days', function () {
    expect(checkDay(date4, date1)).to.be.false;
  });

  test('Expect Checkday to throw for invalid input', function () {
    expect(checkDay.bind(null, date6, date1)).to.throw('Must pass only date string parameters');
  });

  test('Expect Checkday to take unlimited number of arguments', function () {
    expect(checkDay).to.not.throw();
    expect(checkDay(date1, date1, date1, date1)).to.be.true;
    expect(checkDay(date1, date2, date4, date5)).to.be.false;
  })
});
