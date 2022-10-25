import React from "react";

const Table = (props) => (
  <table className="table">
    <thead>
      <tr>
      <th>Nombre</th>
      <th>Descripción</th>
      <th>Categoria</th>
      </tr>
    </thead>
    {props.children}
  </table>
);

export default Table;
