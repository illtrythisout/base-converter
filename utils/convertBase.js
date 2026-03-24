function getDecimalValue(number) {
  // get decimal value of letter
  if (number.charCodeAt(0) >= 48 && number.charCodeAt(0) <= 57) {
    // between 0 and 9
    number = Number(number);
  } else if (
    number.toUpperCase().charCodeAt(0) >= 65 &&
    number.toUpperCase().charCodeAt(0) <= 90
  ) {
    // a letter
    number = number.toUpperCase().charCodeAt(0) - 55;
  } else {
    return null;
  }

  return number;
}

function convertNto10(number, base) {
  let result = 0;

  for (let i = 0; i < number.length; i++) {
    let letter = number[number.length - i - 1];
    letter = getDecimalValue(letter);
    result += letter * base ** i;
  }

  return result.toString();
}

function convert10toN(number, base) {
  let result = '';
  number = Number(number);

  while (number >= base) {
    if (number % base < 10) {
      result = (number % base) + result;
    } else {
      result = String.fromCharCode((number % base) + 55) + result;
    }

    number = Math.floor(number / base);
  }

  if (number % base < 10) {
    result = (number % base) + result;
  } else {
    result = String.fromCharCode((number % base) + 55) + result;
  }
  number = Math.floor(number / base);

  return result;
}

function convertBase(number = '0', from = 10, to = 16) {
  const number10 = convertNto10(number, from);
  const numberN = convert10toN(number10, to);
  return numberN;
}

module.exports = convertBase;
