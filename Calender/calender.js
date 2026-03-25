const monthName = document.querySelector('.js-month-name');
const dayName = document.querySelector('.js-day-name');
const dateName = document.querySelector('.js-date-name');
const yearName = document.querySelector('.js-year-name');


const today = dayjs();


monthName.innerHTML = today.format('MMMM');
dayName.innerHTML = today.format('dddd');
dateName.innerHTML = today.format('D');
yearName.innerHTML = today.format('YYYY');