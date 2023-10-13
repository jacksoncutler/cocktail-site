import { createContext, useContext, useReducer } from 'react';
import { queryParamsReducer, initialState } from './queryParamsReducer';

const QueryParamsContext = createContext();

export const QueryParamsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(queryParamsReducer, initialState);

  const updateSearch = (searchString) => {
    dispatch({
      type: 'UPDATE_SEARCH',
      payload: {
        searchString: searchString,
      },
    });
  };

  const changeSort = (sortType) => {
    dispatch({
      type: 'CHANGE_SORT',
      payload: {
        sortType: sortType,
      },
    });
  };

  const reverseSort = () => {
    const reverseDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
    dispatch({
      type: 'REVERSE_SORT',
      payload: {
        sortDirection: reverseDirection,
      },
    });
  };

  const addFilter = (filter) => {
    const updatedFilters = [...state.filters, filter];
    dispatch({
      type: 'ADD_FILTER',
      payload: {
        filters: updatedFilters,
      },
    });
  };

  const removeFilter = (filter) => {
    const updatedFilters = state.filters.filter(
      (filterId) => filterId !== filter,
    );
    dispatch({
      type: 'REMOVE_FILTER',
      payload: {
        filters: updatedFilters,
      },
    });
  };

  const clearFilters = () => {
    dispatch({
      type: 'CLEAR_FILTERS',
      payload: {
        filters: initialState.filters,
      },
    });
  };

  const providerData = {
    searchString: state.searchString,
    sortType: state.sortType,
    sortDirection: state.sortDirection,
    filters: state.filters,
    updateSearch,
    changeSort,
    reverseSort,
    addFilter,
    removeFilter,
    clearFilters,
  };

  return (
    <QueryParamsContext.Provider value={providerData}>
      {children}
    </QueryParamsContext.Provider>
  );
};

export const useQuery = () => {
  const context = useContext(QueryParamsContext);

  if (context === undefined) {
    throw Error('useQuery must be used inside child of QueryParamsContext');
  }

  return context;
};

export const useQueryParams = () => {
  const context = useContext(QueryParamsContext);

  if (context === undefined) {
    throw Error('useQueryParams must be used inside child of QueryParamsContext');
  }

  return context;
};
