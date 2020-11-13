import { CREATE_ENTRY, GET_ALL, makeAction, REQUEST, SUCCES } from '../actions';

const initialState = {
  loading: false,
  entry: {},
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case makeAction(GET_ALL, REQUEST):
      return { ...state, loading: true };
    case makeAction(GET_ALL, SUCCES):
      return { ...state, loading: false, entries: action.payload };
    case makeAction(CREATE_ENTRY, REQUEST):
      return { ...state, loading: true };
    case makeAction(CREATE_ENTRY, SUCCES):
      return {
        ...state,
        loading: false,
        entries: [action.payload, ...state.entries],
        entry: {},
      };
    default:
      return state;
  }
};
export default reducer;
