export const formatList = (ingredientsString) => {
  const separator = '|';
  return ingredientsString.split(separator);
};
