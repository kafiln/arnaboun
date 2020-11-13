import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../actions';

const List = () => {
  const { entries, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return loading
    ? 'LOADING'
    : entries.map(item => {
        return (
          <p key={item.id}>
            {new Date(item.start).toLocaleDateString()} |
            {new Date(item.end).toLocaleDateString()} | {item.difference}
          </p>
        );
      });
};

export default List;
