import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./home_container.scss";

import HelmetLayout from "../../layouts/HelmetLayout";
import { setShowAutoComplete } from "../../actions/searchActions";
import { Searchbox, PokemonsList, ItemsPerPage } from "../../components";

const HomePageContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowAutoComplete(false));
  }, [dispatch]);

  return (
    <HelmetLayout title="Pokédex" metaDescription="Home Page | Pokédex">
      <div className="home_container">
        <div className="container">
          <h1 className="title">Pokédex</h1>
          <div className="flex_space_between">
            <Searchbox />
            <ItemsPerPage />
          </div>
          <PokemonsList />
        </div>
      </div>
    </HelmetLayout>
  );
};

export default HomePageContainer;
