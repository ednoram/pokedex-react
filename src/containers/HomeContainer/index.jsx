import React from "react";

import "./home_container.scss";

import {
  Searchbox,
  Pagination,
  PokemonsList,
  ItemsPerPage,
} from "../../components";

const HomeContainer = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="title">Pokédex</h1>
        <div className="flexSpaceBetween">
          <Searchbox />
          <ItemsPerPage />
        </div>
        <PokemonsList />
        <Pagination />
      </div>
    </div>
  );
};

export default HomeContainer;
