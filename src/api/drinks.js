const fetchDrinkMenu = async (
  searchString,
  sortType,
  sortDirection,
  filterIds,
) => {
  const path = getEndpoint(sortType);
  const params = buildParams(searchString, sortDirection, filterIds);

  const response = await fetch(path + params, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return response.json();
};

const fetchDrink = async (id) => {
  const response = await fetch(`drinks/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return response.json();
};

// HELPERS

function getEndpoint(sortType) {
  if (sortType === 'liquorType') return '/drinks/allByType?';
  if (sortType === 'alphabetical') return '/drinks/all?';
}

function buildParams(searchString, sortDirection, filterIds) {
  const searchParam = `search=${searchString}&`;
  const sortParam = `sort=${sortDirection}&`;
  const filterParams = filterIds.map((filterId) => `tagIds[]=${filterId}&`);
  return searchParam + sortParam + filterParams;
}

module.exports = {
  fetchDrinkMenu,
  fetchDrink,
};
