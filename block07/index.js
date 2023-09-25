const combonation1 = 5 * 2
const combonation2 = 80 / 2;
const combonation3 = 40 - 1

console.log(combonation1);
console.log(combonation2);
console.log(combonation3);

const message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:';

const atag = document.getElementById("message");

atag.innerHTML += message

function test() {
  var values = ["combonation1","combonation2","combonation3"],
      valueToUse = values[Math.floor(Math.random() * values.length)];
  // do something with the selected value
  alert(valueToUse);
}