const domain = 'https://ec2-54-184-208-223.us-west-2.compute.amazonaws.com';

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
