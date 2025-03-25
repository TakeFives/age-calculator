import isValidNumber from "./isNumberValidator";

export default function formDayValidator(day, month, year) {

    if (!isValidNumber(day)) return 'Enter valid number';

    const numericDay = Number(day);
    const numericMonth = Number(month);
    const numericYear = Number(year);

    const longMonths = [4, 6, 9, 11];
    const isLeapYear = (numericYear % 4 === 0 && numericYear % 100 !== 0) || (numericYear % 400 === 0);
    const maxDays = isLeapYear ? 29 : 28;

    if (!numericDay) {
      return "This field is required";
    } else if (numericDay < 1 || numericDay > 31) {
      return "Enter a valid day";
    } else if (numericMonth === 2) {
      if (numericDay > maxDays) {
        return 'Must be a valid date';
      }
    } else if (longMonths.includes(numericMonth) && numericDay > 30) {
      return "Must be a valid date";
    }
  
    return ""; 
  };