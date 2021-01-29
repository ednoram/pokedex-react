import React from "react";
import { Helmet } from "react-helmet";

import "./home_container.scss";

import {
  ShowMore,
  Searchbox,
  Pagination,
  PokemonsList,
  ItemsPerPage,
} from "../../components";

const HomePageContainer = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content={"Home Page | Pokédex"} />
        <title>Pokédex</title>
      </Helmet>
      <div className="home">
        <div className="container">
          <h1 className="title">Pokédex</h1>
          <div className="flex_space_between">
            <Searchbox />
            <ItemsPerPage />
          </div>
          <PokemonsList />
          <Pagination />
          <ShowMore />
        </div>
      </div>
    </>
  );
};

export default HomePageContainer;
