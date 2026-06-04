const ageCalculateBtn = document.querySelector('#calculate-button');
const inputDateElement = document.querySelector('#input-date');
const result = document.querySelector('#result');

ageCalculateBtn.addEventListener('click', () => {
  const inputDate = inputDateElement.value;

  if (!inputDate) {
    alert('Please select a date first!');
    return;
  }

  const presentDay = new Date();

  const presentDate = presentDay.getDate();
  const presentMonth = presentDay.getMonth() + 1;
  const presentYear = presentDay.getFullYear();

  const birthDay = new Date(inputDate);


  if (birthDay > presentDay) {
   result.innerHTML = 'Birth date cannot be in the future.';
  return;
}

  const birthDate = birthDay.getDate();
  const birthMonth = birthDay.getMonth() + 1;
  const birthYear = birthDay.getFullYear();

  let year = presentYear - birthYear;

 


  let month;
  let days;

  // Calculate years and months
  if (presentMonth < birthMonth) {
    year--;
    month = 12 - (birthMonth - presentMonth);
  } else {
    month = presentMonth - birthMonth;
  }

  // Days in previous month
  const prevMonthDays = getDaysInMonth(
    presentMonth === 1 ? 12 : presentMonth - 1,
    presentMonth === 1 ? presentYear - 1 : presentYear
  );

  // Calculate days
  if (presentDate < birthDate) {
    month--;

    if (month < 0) {
      month = 11;
      year--;
    }

    days = prevMonthDays - (birthDate - presentDate);
  } else {
    days = presentDate - birthDate;
  }



  if(year <= 0) {
    result.innerHTML = `You are ${month} months and ${days} days old`
    
  } else {
  result.innerHTML =
    `You are ${year} years, ${month} months and ${days} days old`;
  }  
});

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}