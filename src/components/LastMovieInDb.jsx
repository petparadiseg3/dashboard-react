import React from "react";
import { useState, useEffect } from "react";

const LastMovieInDb = () => {
  const [lastProduct, setLastProduct] = useState(["0"]);

  useEffect(() => {
    async function getLastProduct() {
      const response = await fetch("http://localhost:3001/api/products");
      const data = await response.json();
      setLastProduct(data.products[data.products.length - 1]);
    }
    getLastProduct();
  }, []);

  return (
    <>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: 40 + "rem" }}
          src={lastProduct.image}
          alt=" Star Wars - Mandalorian "
        />
      </div>

      <h1>{lastProduct.name}</h1>
      <p>{lastProduct.descriptions}</p>
      <a className="btn btn-danger"  rel="nofollow" href={"http://localhost:3001/products/"+lastProduct.id}>
        Ver el detalle del producto
      </a>
    </>
  );
};
export default LastMovieInDb;
