import { GET_ALL, makeAction, REQUEST, SUCCES } from '../actions';

const initialState = {
  loading: false,
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case makeAction(GET_ALL, REQUEST):
      console.log('requesting data');
      return { ...state, loading: true };
    case makeAction(GET_ALL, SUCCES):
      console.log('getting data');
      return { ...state, loading: false, entries: action.payload };
    default:
      return state;
  }
};
export default reducer;
