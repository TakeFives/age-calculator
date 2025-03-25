export default function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== "";
  };
