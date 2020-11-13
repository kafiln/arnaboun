import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSortBy, useTable } from 'react-table';
import { getAll } from '../actions';

const List = () => {
  const dispatch = useDispatch();
  const { entries, loading } = useSelector(state => state);

  const data = useMemo(() => entries, [entries]);
  const columns = useMemo(
    () => [
      {
        id: 'start',
        accessor: r => new Date(r.start).toLocaleDateString(),
        Header: 'Start Date',
      },
      {
        id: 'end',
        accessor: r => new Date(r.end).toLocaleDateString(),
        Header: 'End Date',
      },
      {
        accessor: r => r.difference,
        id: 'difference',
        Header: 'Difference',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return loading
    ? 'LOADING'
    : entries.length !== 0 && (
        <>
          <h1>Saved entries</h1>
          <table
            {...getTableProps()}
            className={`border-gray-500 w-full table-auto`}
          >
            <thead className={`border-gray-500`}>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      className={`p-1 border border-gray-500 bg-gray-700 text-white text-center
                ${column.canSort && 'cursor-pointer'}`}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={{ textAlign: 'center' }}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className={`border-gray-500`} {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    className={`border-gray-500 ${i % 2 ? 'bg-gray-300' : ''} `}
                    {...row.getRowProps()}
                  >
                    {row.cells.map(cell => {
                      return (
                        <td
                          className={`border-gray-500 p-1 border`}
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      );
};

export default List;
