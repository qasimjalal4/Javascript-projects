const calculateBtn = document.querySelector('.js-calculate-button');
const billAmount = document.querySelector('.js-bill-amount');
const tipPercent = document.querySelector('.js-tip-percent');
const totalPeople = document.querySelector('.js-total-people');
const totalAmount = document.querySelector('.js-total-amount');
const tipAmount = document.querySelector('.js-tip-amount');
const billPerPerson = document.querySelector('.js-bill-per-person');

calculateBtn.addEventListener('click', () => {

  let bill = Number(billAmount.value);
  let people =  Number(totalPeople.value);
  let tip = Number(tipPercent.value);


  if(!(billAmount.value) || !(totalPeople.value) === '' || !(tipPercent.value)) {
    alert('Please fill all the input fields');
    return;
  }

  if(isNaN(bill) || isNaN(people) || isNaN(tip)) {
    alert('Please enter valid numbers!');
    return;
  }

  if(bill <= 0) {
    alert('Bill amount must be greater than 0');
    return;
  }

  if(tip < 0) {
    alert('Tip cant be negative')
    return;
  }

  if(people <= 0) {
    alert('There must be atleast one person');
    return;
  }


  let tipValue =  Math.round((tip/100) * bill);
  let totalBill = bill + tip;

  totalAmount.innerHTML = `Total Bill: Rs.${totalBill}`;
  tipAmount.innerHTML = `Tip amount: Rs.${tipValue}`;
  billPerPerson.innerHTML = `Bill per person: Rs.${Math.round(totalBill/people)}`;
})