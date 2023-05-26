import { drinks } from 'tempData/drinks'

export const sortTypes = [
  { value: 'liquorType', label: 'Liquor Type' },
  { value: 'alphabetical', label: 'Alphabetical' },
]

export const sortTheme = (theme) => {
  return { 
    ...theme, 
    colors: {
      ...theme.colors,
      primary: '#000000',
      primary25: '#e6e6e6',
      primary50: '#dadada',
    }, 
  }
}

export const getDrinkList = () => {
  return drinks
}