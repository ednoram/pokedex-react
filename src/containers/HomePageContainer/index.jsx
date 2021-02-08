import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import "./home_container.scss";

import {
  ShowMore,
  Searchbox,
  Pagination,
  PokemonsList,
  ItemsPerPage,
} from "../../components";
import { setShowAutoComplete } from "../../actions/searchActions";

const HomePageContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowAutoComplete(false));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <meta name="description" content={"Home Page | Pokédex"} />
        <title>Pokédex</title>
      </Helmet>
      <div className="home_container">
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
