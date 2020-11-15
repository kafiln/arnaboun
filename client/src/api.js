export const API_URL = '/api/';

export const getAll = () => fetch(API_URL).then(res => res.json());

export const deleteAll = () =>
  fetch(API_URL, { method: 'DELETE' }).then(res => res.json());

export const deleteOne = id =>
  fetch(`${API_URL}${id}`, { method: 'DELETE' }).then(res => res.json());

export const createEntry = entry =>
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  }).then(res => res.json());
