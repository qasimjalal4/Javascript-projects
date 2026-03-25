const calculateBtn = document.querySelector('.js-calculate-button');
const billAmount = document.querySelector('.js-bill-amount');
const tipPercent = document.querySelector('.js-tip-amount');
const totalPeople = document.querySelector('.js-total-people');




calculateBtn.addEventListener('click', () => {

  let bill = Number(billAmount.value);
  let people = totalPeople.value;
  let tip = tipPercent.value;


  if(bill === '' || people === '' || tip === '') {
    alert('Please fill all the input fields');
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


  tip = (tip/100) * bill;
  let totalBill = bill + tip;

  
})