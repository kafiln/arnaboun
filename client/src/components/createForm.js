import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MILLISECONDS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

const differeneInDays = (start, end) =>
  Math.floor(Math.abs(start - end) / MILLISECONDS_IN_ONE_DAY);

const CreateForm = () => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    //TODO: invalid state, add user notification
    if (!end || !start) return;
    const difference = differeneInDays(start, end);
    const entry = {
      start,
      end,
      difference,
    };
    fetch('/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    })
      .then(_ => {
        setEnd(null);
        setStart(null);
      })
      .catch();
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
