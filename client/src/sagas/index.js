import { all, put, takeLatest } from 'redux-saga/effects';
import { GET_ALL, makeAction, REQUEST, SUCCES } from '../actions';
import { getAll } from '../api';

function* getData() {
  const data = yield getAll();
  yield put({ type: makeAction(GET_ALL, SUCCES), payload: data });
}

function* actionWatcher() {
  yield takeLatest(makeAction(GET_ALL, REQUEST), getData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
