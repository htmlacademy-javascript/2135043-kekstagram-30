const checkStringLength = (checkString, maxLenght) => checkString.length <= maxLenght;

const checkPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    newString += normalizeString.at(i);
  }

  return newString === normalizeString;
};

checkStringLength();
checkPalindrome();
