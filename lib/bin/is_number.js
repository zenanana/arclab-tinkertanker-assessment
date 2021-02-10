// returns true if string represents number/float
const isNumber = (str) => {
  if (str.match(/^-?\d+$/)) {
    return true;
  } else if (str.match(/^-?\d+\.\d+$/)) {
    return true;
  } else {
    return false;
  }
};

module.exports = isNumber;
