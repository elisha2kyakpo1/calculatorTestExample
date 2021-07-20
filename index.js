// import calculate from "./calculator.js";

const strings = {
  stringLength: (string) => {
    if (string.length >= 1 && string.length <= 10) {
      const str = string.split('');
      return str.length;
    } else {
      return Error('at least one character should be entered')
    }
  },

  reverseString: (string) => {
    const str = string.split('').reverse().join('');
    return str;
  },
}

module.exports = strings;