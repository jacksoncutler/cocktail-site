import { sortTypes } from 'components/MenuView/helpers'

export const queryReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchString: payload.searchString
      }
    case 'CHANGE_SORT':
      return {
        ...state,
        sortType: payload.sortType
      }
    case 'REVERSE_SORT':
      return {
        ...state,
        sortDirection: payload.sortDirection
      }
    case 'ADD_FILTER':
      return {
        ...state,
        filters: payload.filters
      }
    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: payload.filters
      }
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: payload.filters
      }
    default:
      throw Error(`No reducer with name ${type} found in queryReducer`)
  }
}

export const initialState = {
  searchString: '',
  sortType: sortTypes[0].value,
  sortDirection: 'asc',
  filters: [],
}