const getSum = (...numbers) => {
    if (numbers.some(num => typeof num !== 'number')) {
        return 'One or more arguments are not numbers';
      }
  return numbers.reduce((acc, curValue) => acc + curValue, 0);
};

