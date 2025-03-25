export default function formMonthValidator(month) {
  
  if (!month) {
    return "This field is required";
  } else if (month < 1 || month > 12) {
      return "Enter a valid month";
    } 
  
    return ""; 
  };