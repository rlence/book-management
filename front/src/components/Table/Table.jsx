import React from "react";
import "./Table.scss";


const Table = ({ columns, dataSource }) => {

  const validateTypeData = (source, extra, id) => {
    if (Array.isArray(source)) {
      return source.map((data) => (
        <p>
          {extra.map((type) => (
            <span className="separation"> {data[type]} </span>
          ))}
        </p>
      ));
    }

    if(typeof extra === "function"){
        return extra(id)
    }

    if (!source) {
      return "-";
    }

    return source;
  };

  return (
    <table className="table t-content">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.type}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data) => (
          <tr key={data.id}>
            {columns.map((column) => (
              <td>{validateTypeData(data[column.type], column.extra, data.id)}</td>
            ))}
          </tr>
        ))}
        <tr>
          <td>
            
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
