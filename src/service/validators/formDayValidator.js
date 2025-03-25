export default function formDayValidator(day, month, year) {
    const longMonths = [4, 6, 9, 11];
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const maxDays = isLeapYear ? 29 : 28;

    if (!day) {
      return "This field is required";
    } else if (day < 1 || day > 31) {
      return "Enter a valid day";
    } else if (month === 2) {
      if (day > maxDays) {
        return 'Must be a valid date';
      }
    } else if (longMonths.includes(month) && day > 30) {
      return "Must be a valid date";
    }
  
    return ""; 
  };