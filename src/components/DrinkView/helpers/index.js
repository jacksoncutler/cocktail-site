import { drinks } from 'tempData/drinks'

export const getDrinkData = (name) => {
  return drinks.find(drink => name === drink.name)
}