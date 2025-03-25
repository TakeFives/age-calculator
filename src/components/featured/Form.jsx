import { useState } from "react";

import ageCalculator from "../../service/utils/ageCalculator";
import formDayValidator from "../../service/validators/formDayValidator";
import formMonthValidator from "../../service/validators/formMonthValidator";
import formYearValidator from "../../service/validators/formYearValidator";

function Form() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');

 
  const handleDayChange = (e) => {
    const chosenDay = e.target.value;
    const chosenMonth = Number(month);
    const chosenYear = Number(year);

    const error = formDayValidator(chosenDay, chosenMonth, chosenYear);
    setDayError(error);

    if (error) {
      setDay(''); 
    } else {
      setDay(chosenDay);
    }
  };
  const handleMonthChange = (e) => {
    const chosenMonth = e.target.value;

    const error = formMonthValidator(chosenMonth);
    setMonthError(error);

    if (error) {
      setMonth(''); 
    } else {
      setMonth(chosenMonth);
    }
  };
  const handleYearChange = (e) => {
    const chosenYear = e.target.value;

    const error = formYearValidator(chosenYear);
    setYearError(error);

    if (!error) {
        setYear(chosenYear);
      }
  };

  const validateInputs = () => {
    if (dayError || monthError || yearError || !day || !month || !year) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateInputs()) return;

    ageCalculator(day, month, year);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Day:
            <input
              type="text"
              value={day}
              onChange={(e) => handleDayChange(e)}
              placeholder="DD"
              className={dayError && `error`}
            />
          </label>
          {dayError && <span className="error-message">{dayError}</span>}
        </div>
        <div>
          <label>
            Month:
            <input
              type="text"
              value={month}
              onChange={(e) => handleMonthChange(e)}
              placeholder="MM"
              className={monthError && `error`}
            />
          </label>
          {monthError && <span className="error-message">{monthError}</span>}
        </div>
        <div>
          <label>
            Year:
            <input
              type="text"
              value={year}
              onChange={(e) => handleYearChange(e)}
              placeholder="YYYY"
              className={yearError && `error`}
            />
          </label>
          {yearError && <span className="error-message">{yearError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
