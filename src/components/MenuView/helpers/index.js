export const sortSelectOptions = [
  { value: 'liquorType', label: 'Liquor Type' },
  { value: 'alphabetical', label: 'Alphabetical' },
]

export function sortSelectTheme(theme) {
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