import isValidNumber from "./isNumberValidator";

export default function formMonthValidator(month) {

   if (!isValidNumber(month)) return 'Enter valid number';
  
   const numericMonth = Number(month);

  if (!numericMonth) {
    return "This field is required";
  } else if (numericMonth < 1 || numericMonth > 12) {
      return "Enter a valid month";
    } 
  
    return ""; 
  };