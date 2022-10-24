import React from "react";
import PropTypes from "prop-types";
const ContentRowMovies = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card ${props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold ${props.estiloTitulo} text-uppercase mb-1`}
              >
                {props.titulo}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.cifra}
              </div>
            </div>
            <div className="col-auto">
              <i className={`${props.icono} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentRowMovies.propTypes = {
  color: PropTypes.oneOf([
    "border-left-primary",
    "border-left-success",
    "border-left-warning",
    "border-left-danger",
  ]).isRequired,
  estiloTitulo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  icono: PropTypes.string.isRequired,
};

ContentRowMovies.defaultProps = {
  titulo:"Texto default",
  estiloTitulo:"text-primary",
  color:"border-left-primary",
  cifra: 0,
  icono:"fas fa-film"
}

export default ContentRowMovies;
