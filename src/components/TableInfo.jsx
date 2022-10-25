import React from "react";

const TableInfo = (props) => (
  <tbody>
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
    </tr>
  </tbody>
);

export default TableInfo;
