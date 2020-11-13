import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createEntry } from '../actions';
import { differeneInDays } from '../time';

const CreateForm = () => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const { loading } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (loading) return;
    //TODO: invalid state, add user notification
    if (!end || !start) return;
    const difference = differeneInDays(start, end);
    const entry = {
      start: new Date(start).toDateString(),
      end: new Date(end).toDateString(),
      difference,
    };
    dispatch(createEntry(entry));
  };

  return (
    <form onSubmit={handleSubmit}>
      <DatePicker selected={start} onChange={date => setStart(date)} />
      <DatePicker selected={end} onChange={date => setEnd(date)} />
      <input type="submit"></input>
    </form>
  );
};

export default CreateForm;
