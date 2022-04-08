function simplifyNumber(num) {
    if (num < 0) {
      return 0;
    } else if (num > 10) {
      return "sok";
    } else if (num % 2 !== 0) {
        return Math.floor(num)
    } else {
      return num;
    }
  }
  
  module.exports = simplifyNumber