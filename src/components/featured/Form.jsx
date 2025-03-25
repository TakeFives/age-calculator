import { useState } from "react";

import ageCalculator from "../../service/ageCalculator";

function Form() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');

 
  const validateInputs = () =>{
    let isFormValid;
    //validation goes here
  }

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
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="DD"
            />
          </label>
          {dayError && <span className="error-message">{dayError}</span>}
        </div>
        <div>
          <label>
            Month:
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="MM"
            />
          </label>
          {monthError && <span className="error-message">{monthError}</span>}
        </div>
        <div>
          <label>
            Year:
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="YY"
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
