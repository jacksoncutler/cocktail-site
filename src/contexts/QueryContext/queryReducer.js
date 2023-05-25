export const queryReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: payload.search
      }
    case 'UPDATE_SORT':
      return {
        ...state,
        sort: payload.sort
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
  search: '',
  sort: '',
  filters: [],
}