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

export { getRandomInteger };
export { createUniqIdNumber };
