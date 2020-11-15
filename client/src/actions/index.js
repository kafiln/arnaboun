export const GET_ALL = 'GET_ALL';
export const DELETE_ALL = 'DELETE_ALL';
export const CREATE_ENTRY = 'CREATE_ENTRY';

export const REQUEST = 'REQUEST';
export const SUCCES = 'SUCCES';
export const FAILURE = 'FAILURE';

export const makeAction = (actionName, state) => `${actionName}_${state}`;

export const getAll = () => ({
  type: makeAction(GET_ALL, REQUEST),
});

export const deleteAll = () => ({
  type: makeAction(DELETE_ALL, REQUEST),
});

export const createEntry = entry => ({
  type: makeAction(CREATE_ENTRY, REQUEST),
  payload: entry,
});
