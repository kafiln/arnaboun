import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEntry } from '../actions';
import { differeneInDays } from '../time';
import DatePicker from './datePicker';

const CreateForm = () => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [difference, setDifference] = useState(null);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!start || !end) {
      setDifference(null);
      setValid(false);
    } else {
      const difference = differeneInDays(start, end);
      setDifference(difference);
      setValid(true);
    }
  }, [start, end]);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!valid) return;

    const entry = {
      start: new Date(start).toDateString(),
      end: new Date(end).toDateString(),
      difference,
    };
    dispatch(createEntry(entry));
    clearAll();
    setValid(false);
  };

  const clearAll = () => {
    setDifference(null);
    setStart(null);
    setEnd(null);
  };

  return (
    <>
      <h1>Add a new entry</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <DatePicker value={start} setter={setStart} />
        <DatePicker value={end} setter={setEnd} />
        {difference !== null && (
          <p className="my-2 text-center">
            The difference between the two dates is {difference}{' '}
            {difference === 1 ? 'day' : 'days'}
          </p>
        )}
        <input
          className={`my-2 py-2 ${
            valid
              ? 'cursor-pointer bg-blue-300 border'
              : 'cursor-not-allowed	bg-blue-100'
          }`}
          type="submit"
          value="Submit"
          disabled={!valid}
        />
      </form>
    </>
  );
};

export default CreateForm;
