//BOOTSTRAP
import Spinner from "react-bootstrap/Spinner";

//COMPONENTES
import React from "react";

//ESTILOS
import "./Loading.css";

const Loading = () => {
  return (
    <Spinner animation="border" role="status" className="spinner-container">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
