export const isInvalidNumber = (input) => {
  return typeof input !== "number" || isNaN(input);
};

export const getSum = (a, b) => parseFloat((a + b).toFixed(1));
export const getSub = (a, b) => parseFloat((a - b).toFixed(1));
export const getMult = (a, b) => parseFloat((a * b).toFixed(1));
export const getDiv = (a, b) => parseFloat((a / b).toFixed(1));
