import React from "react";
import { useState, useEffect } from "react";

import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import ContentCard from "./ContentCard";
import LastMovieInDb from "./LastMovieInDb";

function ContentRowTop() {

  const [countProducts, setCountProducts] = useState(["0"]);

  useEffect(() => {
    async function getCountProducts() {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      setCountProducts(data.meta.count)
    }
    getCountProducts()
  }, [])

  const [countUsers, setCountUsers] = useState(["0"]);

  useEffect(() => {
    async function getCountUsers() {
      const response = await fetch('http://localhost:3001/api/users');
      const data = await response.json();
      setCountUsers(data.meta.count)
    }
    getCountUsers()
  }, [])

  const [countCategories, setCountCategories] = useState(["0"]);

  useEffect(() => {
    async function getCountCategories() {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      console.log(data)
      setCountCategories(data.countCategories)
    }
    getCountCategories()
  }, [])


  const [categories, setCategories] = useState(["0"]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      setCategories(data.countByCategory)
    }
    fetchCategories()
  }, [])

  const [brands, setBrands] = useState(["0"]);

  useEffect(() => {
    async function fetchBrands() {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      setBrands(data.countBrands)
    }
    fetchBrands()
  }, [])

  let tresCards = [
    {
      titulo: "Total de productos",
      estiloTitulo: "text-primary ",
      color: "border-left-primary",
      cifra: countProducts,
      icono: "fas fa-cat",
    },
    {
      titulo: "Total de usuarios",
      estiloTitulo: "text-success",
      color: "border-left-success",
      cifra: countUsers,
      icono: "fas fa-user",
    },
    {
      titulo: "Total de categorias",
      estiloTitulo: "text-warning",
      color: "border-left-warning",
      cifra: countCategories,
      icono: "fas fa-dog",
    },
    {
      titulo: "Total de marcas",
      estiloTitulo: "text-danger",
      color: "border-left-danger",
      cifra: brands,
      icono: "fas fa-dog",
    }
  ];



  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <div className="row">
          {/*<!-- Movies in Data Base -->*/}
          {tresCards.map((card, i) => (
            <ContentRowMovies
              titulo={card.titulo}
              estiloTitulo={card.estiloTitulo}
              color={card.color}
              cifra={card.cifra}
              icono={card.icono}
              key={card + i}
            />
          ))}
        </div>
        {/*<!-- End movies in Data Base -->*/}
        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <ContentCard titulo="Ultimo producto agregado">

            <LastMovieInDb />

          </ContentCard>
          {/*<!-- End content row last movie in Data Base -->*/}
          {/*<!-- Genres in DB -->*/}
          < ContentCard titulo="Categorias">
            <div className="row">
              {categories.map((oneCategory, i) => (
                <div className="col-lg-6 mb-4" key={oneCategory + i}>
                  <div className="card bg-dark text-white shadow" >
                    <GenresInDb categoria={oneCategory.name} cant={oneCategory.count}  />
                  </div>
                </div>
              ))}
            </div>
          </ContentCard >
        </div>
      </div>


      {/*<!--End Content Row Top-->*/}
    </React.Fragment >
  );
}
export default ContentRowTop;
