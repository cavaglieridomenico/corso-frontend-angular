export const isInvalidNumber = (input) => {
  return typeof input !== "number" || isNaN(input);
};
