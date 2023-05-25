import { createContext, useContext, useReducer } from 'react'
import { queryReducer, initialState } from './queryReducer'

const QueryContext = createContext()

export const QueryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(queryReducer, initialState)

  const updateSearch = (searchString) => {
    dispatch({
      type: 'UPDATE_SEARCH',
      payload: {
        searchString: searchString
      }
    })
  }

  const updateSort = (sortType) => {
    dispatch({
      type: 'UPDATE_SORT',
      payload: {
        sortType: sortType
      }
    })
  }

  const addFilter = (filter) => {
    const updatedFilters = [...state.filters, filter]
    dispatch({
      type: 'ADD_FILTER',
      payload: {
        filters: updatedFilters
      }
    })
  }

  const removeFilter = (filter) => {
    const updatedFilters = state.filters.filter(filterId => filterId !== filter)
    dispatch({
      type: 'REMOVE_FILTER',
      payload: {
        filters: updatedFilters
      }
    })
  }

  const clearFilters = () => {
    dispatch({
      type: 'CLEAR_FILTERS',
      payload: {
        filters: initialState.filters
      }
    })
  }


  const providerData = {
    searchString: state.searchString,
    sortType: state.sortType,
    filters: state.filters,
    updateSearch,
    updateSort,
    addFilter,
    removeFilter,
    clearFilters
  }

  return <QueryContext.Provider value={providerData}>{children}</QueryContext.Provider>
}

export const useQuery = () => {
  const context = useContext(QueryContext)

  if (context === undefined) {
    throw Error("useQuery must be used inside child of QueryContext")
  }

  return context
}