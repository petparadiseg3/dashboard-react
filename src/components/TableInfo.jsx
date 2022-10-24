import React from "react";

const TableInfo = (props) => (
  <tbody>
    <td>{props.name}</td>
    <td>{props.description}</td>
    <td>{props.category}</td>
  </tbody>
);

export default TableInfo;
