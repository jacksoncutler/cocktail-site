const domain = 'https://demococktailserver.xyz';

export const fetchTagsByType = async () => {
  const response = await fetch(domain + '/tags/allByType', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return response.json();
};
