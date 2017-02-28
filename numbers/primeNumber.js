//pass in a prime number, this will return true or false of whether it is prime or not.

const primeCheck = (n) => {
  let prime = false;
  for(let i = 2; i < Math.sqrt(n); i++){
    if(n%i === 0) {
      prime = true;
    }
  }
  return prime;
}

const primeFactor = (n) => {
  const factors = [1, n];
  for(let i = 2; i < Math.sqrt(n); i++){
    if(n % i === 0 ){
      factors.push(i, n/i);
    }
  }
  return factors;
}