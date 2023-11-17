const REMOVE_MESSAGE_TIMEOUT = 5000;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createUniqIdNumber = (min, max) => {
  const uniqIdArray = [];

  return () => {
    let currentIdNumber = getRandomInteger(min, max);
    while (uniqIdArray.includes(currentIdNumber)) {
      currentIdNumber = getRandomInteger(min, max);
    }
    uniqIdArray.push(currentIdNumber);
    return currentIdNumber;
  };
};

const errorMessageTemplate = document
  .querySelector('#data-error')
  .content
  .querySelector('.data-error');

const showErrorMessage = () => {
  const errorElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const isEscapeKey = (evt) => evt.key === 'Escape';

export { isEscapeKey, showErrorMessage, debounce, createUniqIdNumber };
