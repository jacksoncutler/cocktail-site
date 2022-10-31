import { drinks } from 'tempData/drinks'

export const getDrinkData = (name) => {
  return drinks.filter(drink => name === drink.name)
}