export default function ageCalculator(day, month, year){
    const age = {};

    const birthDate = new Date(year, month - 1, day); 
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += previousMonth.getDate();
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    age.years = ageYears;
    age.month = ageMonths;
    age.days = ageDays;


    console.log(age)
    return age

}