/**
 *
 *
 * @param {string} date A date to compare if the days of two dates match
 * @param {string} date2 Second date to compare against
 * @returns {boolean} true if the days match
 */

export default function (...dates) {

  let split = (str) => {
    let index = str.indexOf('T');
    if (index !== -1) {
      return str.slice(0, index);
    }
    return str;
  };

  let isDateString = string => typeof((new Date(string)).toJSON()) === 'string';

  let cache;
  let initialized;


  for (let i = 0; i < dates.length; i += 1) {
    if (!isDateString(dates[i])) {
      throw new Error('Must pass only date string parameters');
    }

    if (!initialized) {
      cache = split(dates[i]);
      initialized = 1;
    }

    if (initialized && (split(dates[i]) !== cache)) {
      return false;
    }
  }

  if (dates.length) {
    return true;
  }

}
