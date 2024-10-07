import React from "react";
import { useDispatch } from "react-redux";

const Table = ({ table, selectPlayer }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead className="bg-slate-400 ">
          <tr>
            <th className="border-2 border-black w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 1 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.select}
                    </p>
                  )
              )}
            </th>
            <th className="border-2 border-black w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 2 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.select}
                    </p>
                  )
              )}
            </th>
            <th className="border-2 border-black w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 3 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.select}
                    </p>
                  )
              )}
            </th>
            <th className="border-2 border-black w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 4 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.select}
                    </p>
                  )
              )}
            </th>
            <th className="border-2 border-black w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 5 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.select}
                    </p>
                  )
              )}
            </th>
            <th className="border-2 border-black w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 6 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.select}
                    </p>
                  )
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center border border-slate-800 w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 1 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.fruits}
                    </p>
                  )
              )}
            </td>
            <td className="text-center border border-slate-800 w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 2 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.fruits}
                    </p>
                  )
              )}
            </td>
            <td className="text-center border border-slate-800 w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 3 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.fruits}
                    </p>
                  )
              )}
            </td>
            <td className="text-center border border-slate-800 w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 4 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.fruits}
                    </p>
                  )
              )}
            </td>
            <td className="text-center border border-slate-800 w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 5 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.fruits}
                    </p>
                  )
              )}
            </td>
            <td className="text-center border border-slate-800 w-24 h-10 max-sm:w-14 max-sm:text-sm">
              {table.map(
                (item) =>
                  item.id === 6 && (
                    <p
                      key={item.id}
                      onClick={() => dispatch(selectPlayer(item))}
                    >
                      {item.fruits}
                    </p>
                  )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
