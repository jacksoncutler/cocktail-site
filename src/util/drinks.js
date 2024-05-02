const domain = 'https://ec2-54-184-208-223.us-west-2.compute.amazonaws.com';

export const fetchDrinkMenu = async (
  searchString,
  sortType,
  sortDirection,
  filterIds,
) => {
  const path = getEndpoint(sortType);
  const params = buildParams(searchString, sortDirection, filterIds);

  const response = await fetch(domain + path + params, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return await response.json();
};

export const fetchDrink = async (id) => {
  const response = await fetch(domain + `/drinks/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return await response.json();
};

// HELPERS

function getEndpoint(sortType) {
  if (sortType === 'liquorType') return '/drinks/allByType?';
  if (sortType === 'alphabetical') return '/drinks/all?';
}

function buildParams(searchString, sortDirection, filterIds) {
  const searchParam = `search=${searchString}&`;
  const sortParam = `sort=${sortDirection}&`;
  const filterParams = filterIds.map((filterId) => `tagIds[]=${filterId}&`).join('');
  return searchParam + sortParam + filterParams;
}