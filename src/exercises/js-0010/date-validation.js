export const isValidDay = (number) => {
  const day = parseInt(number);
  return typeof day === "number" && day !== NaN && day >= 1 && day <= 31;
};

export const isValidMonth = (number) => {
  const month = parseInt(number);
  return (
    typeof month === "number" && month !== NaN && month >= 1 && month <= 12
  );
};

export const isValidYear = (number) => {
  const year = parseInt(number);
  return typeof year === "number" && year !== NaN && year >= 0 && year <= 9999;
};
