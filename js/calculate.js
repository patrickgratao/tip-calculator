const calculate = (percentage) => {
  const bill = parseInt(document?.getElementById("billInput")?.value);
  const numberOfPeople = parseInt(document?.getElementById('numberOfPeopleInput')?.value);
  let totalTip =0;
  let totalPerPerson = 0;
  let tipAmountPerPerson = 0;

  if ((bill || bill === 0) && (numberOfPeople || numberOfPeople === 0)) {
    if (bill > 0 && numberOfPeople > 0) {
      totalTip = bill * percentage / 100;
      tipAmountPerPerson = totalTip / numberOfPeople;
      totalPerPerson = (bill + totalTip) / numberOfPeople;
    }
  } 

  document.getElementById('totalPerPerson').textContent = `$${totalPerPerson?.toFixed(2)}`
  document.getElementById('tipAmountPerPerson').textContent = `$${tipAmountPerPerson?.toFixed(2)}`
  document.getElementById('buttonReset').removeAttribute("disabled", "disabled");
}

const resetValues = () => {
  document.getElementById("billInput").value = 0;
  document.getElementById("numberOfPeopleInput").value = 0;
  document.getElementById('totalPerPerson').textContent = `$0.00`;
  document.getElementById('tipAmountPerPerson').textContent = `$0.00`;

  document.getElementById('buttonReset').setAttribute("disabled", "disabled");
}


