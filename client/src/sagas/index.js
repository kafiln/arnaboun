import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
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
import { createEntry, deleteAll, deleteOne, getAll } from '../api';

function* getData() {
  try {
    const data = yield call(getAll);
    yield put({ type: makeAction(GET_ALL, SUCCES), payload: data });
  } catch (error) {
    yield put({ type: makeAction(GET_ALL, FAILURE) });
  }
}

function* removeAll() {
  try {
    const data = yield call(deleteAll);
    yield put({ type: makeAction(DELETE_ALL, SUCCES), payload: data });
  } catch (error) {
    yield put({ type: makeAction(DELETE_ALL, FAILURE) });
  }
}
function* removeOne(action) {
  try {
    const data = yield call(deleteOne, action.payload);
    console.log(data);
    yield put({ type: makeAction(DELETE, SUCCES), payload: +data.id });
  } catch (error) {
    yield put({ type: makeAction(DELETE, FAILURE) });
  }
}

function* create(action) {
  try {
    const data = yield call(createEntry, action.payload);
    yield put({ type: makeAction(CREATE_ENTRY, SUCCES), payload: data });
  } catch (error) {
    yield put({ type: makeAction(CREATE_ENTRY, FAILURE) });
  }
}

function* actionWatcher() {
  yield takeLatest(makeAction(GET_ALL, REQUEST), getData);
  yield takeLatest(makeAction(DELETE_ALL, REQUEST), removeAll);
  yield takeEvery(makeAction(CREATE_ENTRY, REQUEST), create);
  yield takeEvery(makeAction(DELETE, REQUEST), removeOne);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
