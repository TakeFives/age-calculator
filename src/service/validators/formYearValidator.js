export default function formYearValidator(year) {
  const minYear = 1900;

  if (!year) {
    return "This field is required";
  } else if (year < minYear || year > new Date().getFullYear()) {
    return "Enter a valid year";
  }

  return "";
}
