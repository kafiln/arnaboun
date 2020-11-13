import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CREATE_ENTRY, GET_ALL, makeAction, REQUEST, SUCCES } from '../actions';
import { createEntry, getAll } from '../api';

function* getData() {
  const data = yield call(getAll);
  yield put({ type: makeAction(GET_ALL, SUCCES), payload: data });
}

function* create(action) {
  const data = yield call(createEntry, action.payload);
  yield put({ type: makeAction(CREATE_ENTRY, SUCCES), payload: data });
}

function* actionWatcher() {
  yield takeLatest(makeAction(GET_ALL, REQUEST), getData);
  yield takeEvery(makeAction(CREATE_ENTRY, REQUEST), create);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
