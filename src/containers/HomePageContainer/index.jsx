import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./home_container.module.scss";

import HelmetLayout from "../../layouts/HelmetLayout";
import { setShowAutoComplete } from "../../actions/searchActions";
import { Searchbox, PokemonsList, CardsPerPage } from "../../components";

const HomePageContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowAutoComplete(false));
  }, [dispatch]);

  return (
    <HelmetLayout title="Pokédex" metaDescription="Home Page | Pokédex">
      <div className={styles.home_container}>
        <div className="container">
          <h1 className={styles.title}>Pokédex</h1>
          <div className="flex_space_between">
            <Searchbox />
            <CardsPerPage />
          </div>
          <PokemonsList />
        </div>
      </div>
    </HelmetLayout>
  );
};

export default HomePageContainer;
