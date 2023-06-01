//custom variables
const amount = document.getElementById("billEntry") as HTMLInputElement;
const five = document.getElementById("fivePercent") as HTMLInputElement;
const ten = document.getElementById("tenPercent") as HTMLInputElement;
const fifteen = document.getElementById("fifteenPercent") as HTMLInputElement;
const twentyFive = document.getElementById(
  "twentyFivePercent"
) as HTMLInputElement;
const fifty = document.getElementById("fiftyPercent") as HTMLInputElement;
const custom = document.getElementById("customTip") as HTMLInputElement;
const people = document.getElementById("peopleEntry") as HTMLInputElement;
const tipAmount = document.getElementById("tipAmount") as HTMLOutputElement;
const fullAmount = document.getElementById("finalAmount") as HTMLOutputElement;
const reset = document.getElementById("reset") as HTMLOutputElement;

//The five percent
function fiveP(): void {
  const Five = parseFloat(amount.value);
  const person = parseFloat(people.value);
  const TotalTip = Five * 0.05;
  const totalAMount5 = Five / person;
  const tipPerPerson = TotalTip / person;
  const totalPerPerson = tipPerPerson + totalAMount5;
  const roundedTip = tipPerPerson.toFixed(2);
  const roundedAmount = totalPerPerson.toFixed(2);
  tipAmount.textContent = "$ " + roundedTip.toString();
  fullAmount.textContent = "$ " + roundedAmount.toString();
  console.log(roundedAmount);
}
five.addEventListener("click", fiveP);
//The ten percent
function tenP(): void {
  const Ten = parseFloat(amount.value);
  const person = parseFloat(people.value);
  const total = Ten * 0.1;
  const totalAMount10 = Ten / person;
  const tipPerPerson10 = total / person;
  const totalPerPerson10 = tipPerPerson10 + totalAMount10;
  const roundedTip10 = tipPerPerson10.toFixed(2);
  const roundedAmount10 = totalPerPerson10.toFixed(2);
  tipAmount.textContent = "$ " + roundedTip10.toString();
  fullAmount.textContent = "$ " + roundedAmount10.toString();
  console.log(total);
}
ten.addEventListener("click", tenP);
//The fifteen percent
function fifteenP(): void {
  const Fifteen = parseFloat(amount.value);
  const person = parseFloat(people.value);
  const Total15 = Fifteen * 0.15;
  const totalAMount15 = Fifteen / person;
  const tipPerPerson15 = Total15 / person;
  const totalPerPerson15 = tipPerPerson15 + totalAMount15;
  const roundedTip15 = tipPerPerson15.toFixed(2);
  const roundedAmount15 = totalPerPerson15.toFixed(2);
  tipAmount.textContent = "$ " + roundedTip15.toString();
  fullAmount.textContent = "$ " + roundedAmount15.toString();
  console.log(Total15);
}
fifteen.addEventListener("click", fifteenP);
//The twentyFive percent
function twentyFiveP(): void {
  const TwentyFive = parseFloat(amount.value);
  const person = parseFloat(people.value);
  const Total25 = TwentyFive * 0.25;
  const totalAMount25 = TwentyFive / person;
  const tipPerPerson25 = Total25 / person;
  const totalPerPerson25 = tipPerPerson25 + totalAMount25;
  const roundedTip25 = tipPerPerson25.toFixed(2);
  const roundedAmount25 = totalPerPerson25.toFixed(2);
  tipAmount.textContent = "$ " + roundedTip25.toString();
  fullAmount.textContent = "$ " + roundedAmount25.toString();
  console.log(Total25);
}
twentyFive.addEventListener("click", twentyFiveP);
//The fifty percent
function fiftyP(): void {
  const Fifty = parseFloat(amount.value);
  const person = parseFloat(people.value);
  const Total50 = Fifty * 0.5;
  const totalAMount50 = Fifty / person;
  const tipPerPerson50 = Total50 / person;
  const totalPerPerson50 = tipPerPerson50 + totalAMount50;
  const roundedTip50 = tipPerPerson50.toFixed(2);
  const roundedAmount50 = totalPerPerson50.toFixed(2);
  tipAmount.textContent = "$ " + roundedTip50.toString();
  fullAmount.textContent = "$ " + roundedAmount50.toString();
  console.log(Total50);
}
fifty.addEventListener("click", fiftyP);
//The custom percent
function customP(): void {
  const Custom = parseFloat(amount.value);
  const cusTom = parseFloat(custom.value);
  const person = parseFloat(people.value);
  const customTip = cusTom * 0.01;
  const Totalcustomtip = Custom * customTip;
  const totalAMountCustom = Custom / person;
  const totalamountPerPersonCustom = Totalcustomtip + totalAMountCustom;
  const roundedTipCustom = Totalcustomtip.toFixed(2);
  const roundedAmountCustom = totalamountPerPersonCustom.toFixed(2);
  tipAmount.textContent = "$ " + roundedTipCustom.toString();
  fullAmount.textContent = "$ " + roundedAmountCustom.toString();
}
custom.addEventListener("keyup", customP);
//the reset button
function Reset(): void {
  tipAmount.textContent = "$ 0.00";
  fullAmount.textContent = "$ 0.00";
}
reset.addEventListener("click", Reset);
