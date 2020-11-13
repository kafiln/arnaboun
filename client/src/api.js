export const API_URL = '/api/';

export const getAll = async () => {
  return await fetch(API_URL).then(res => res.json());
};

export const createEntry = async entry => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
};
