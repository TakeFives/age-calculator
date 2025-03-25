import isValidNumber from "./isNumberValidator";

export default function formYearValidator(year) {

  if (!isValidNumber(year)) return 'Enter valid number';

  const numericYear = Number(year)

  if (!numericYear) {
    return "This field is required";
  } else if (numericYear < 1 || numericYear > new Date().getFullYear()) {
    return "Enter a valid year";
  }

  return "";
}
