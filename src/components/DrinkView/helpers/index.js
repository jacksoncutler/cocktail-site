export const formatIngredients = (ingredientsString) => { 
  const separator = ', ';
  return ingredientsString.split(separator);
};