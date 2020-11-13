import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const datePicker = ({ value, setter }) => {
  return (
    <DatePicker
      selected={value}
      className="my-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      isClearable
      placeholderText="Pick a date"
      onChange={date => {
        setter(date);
      }}
    />
  );
};

export default datePicker;
