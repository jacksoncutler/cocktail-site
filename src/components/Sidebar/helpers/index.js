import { liquors, ingredients } from 'tempData/filters'

export const getFilters = () => {
  return {
    liquors: liquors,
    ingredients: ingredients,
  }
}