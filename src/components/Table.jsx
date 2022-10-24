import React from "react";

const Table = (props) => (
  <table className="table">
    <thead>
      <th>Nombre</th>
      <th>Descripción</th>
      <th>Categoria</th>
    </thead>
    {props.children}
  </table>
);

export default Table;
