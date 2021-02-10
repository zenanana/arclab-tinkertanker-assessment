// since input is in string, we use js's duck typing here. === will fail.
const isPrime = (n) => {
  if (n <= 0) {
    return "no";
  }
  if (n == 1) {
    return "no";
  }
  if (n <= 3) {
    return "yes";
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return "no";
  }
  i = 5;
  while (i ** 2 <= n) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return "no";
    }
    i = i + 6;
  }
  return "yes";
};

module.exports = isPrime;
