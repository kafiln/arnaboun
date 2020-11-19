import {
  CREATE_ENTRY,
  DELETE,
  DELETE_ALL,
  FAILURE,
  GET_ALL,
  makeAction,
  REQUEST,
  SUCCES,
} from '../actions';

const initialState = {
  loading: false,
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case makeAction(GET_ALL, REQUEST):
    case makeAction(DELETE_ALL, REQUEST):
      return { ...state, loading: true };
    case makeAction(GET_ALL, SUCCES):
      return { ...state, loading: false, entries: action.payload };
    case makeAction(DELETE_ALL, SUCCES):
      return initialState;
    case makeAction(DELETE, FAILURE):
      return { ...state, loading: false };
    case makeAction(DELETE, SUCCES):
      const entries = state.entries.filter(e => e.id !== action.payload);
      return { ...state, entries, loading: false };
    case makeAction(GET_ALL, FAILURE):
    case makeAction(DELETE_ALL, FAILURE):
      return { ...state, loading: false };
    case makeAction(CREATE_ENTRY, REQUEST):
      return { ...state, loading: true };
    case makeAction(CREATE_ENTRY, FAILURE):
      return { ...state, loading: false };
    case makeAction(CREATE_ENTRY, SUCCES):
      return {
        ...state,
        loading: false,
        entries: [action.payload, ...state.entries],
      };
    default:
      return state;
  }
};
export default reducer;
