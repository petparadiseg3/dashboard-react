import React from "react";

const GenresInDb = (props) => {
  return <div className="card-body">{props.categoria} : {props.cant}</div>;
};

export default GenresInDb;
