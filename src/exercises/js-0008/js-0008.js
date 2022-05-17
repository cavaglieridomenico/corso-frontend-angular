/*DOM Elements*/
const getInputNumber = () => document.querySelector("#number");
const getMessageBoolean = () => document.querySelector("#message-boolean");
const getButtonBoolean = () => document.querySelector("#button-boolean");
const getMessagePrimes = () => document.querySelector("#message-primes");
const getButtonPrimes = () => document.querySelector("#button-primes");

const isPrime = (number) => {
  if (number === 0) return false;
  var sqrtnum = Math.floor(Math.sqrt(number));
  var prime = number != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const printFivePrimes = (number) => {
  const list = [];
  let i = 1;
  while (list.length <= number - 1) {
    if (isPrime(i)) {
      console.log(i);
      list.push(i);
    }
    i++;
  }
  console.log(list);
  return list;
};

getButtonBoolean().addEventListener("click", () => {
  if (!getInputNumber().value) return;
  getMessageBoolean().textContent = isPrime(parseInt(getInputNumber().value));
});

getButtonPrimes().addEventListener("click", () => {
  if (!getInputNumber().value) return;
  getMessagePrimes().textContent = printFivePrimes(
    getInputNumber().value.toString()
  );
});
console.log(printFivePrimes(25));
