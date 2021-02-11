import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import styles from "./pokemons_list.module.scss";

import { PokemonCard } from "..";

import { useWindowSize } from "../../hooks";
import { Pagination } from "../../components";
import { setStep } from "../../actions/paginationActions";

const PokemonsList = () => {
  const [, setTimer] = useState(null);
  const [limit, setLimit] = useState(Infinity);
  const [loading, setLoading] = useState(false);

  const { pokemons, pagination, searchValue } = useSelector(
    (state) => ({
      pokemons: state.pokemons,
      pagination: state.pagination,
      searchValue: state.search.value,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const windowSize = useWindowSize();

  const filteredPokemons = searchValue.trim()
    ? pokemons.filter((pokemon) =>
        pokemon.name.startsWith(searchValue.trim().toLowerCase())
      )
    : pokemons.slice(pagination.start, pagination.start + pagination.step);

  useEffect(() => {
    const handleScroll = () => {
      if (
        Math.ceil(window.scrollY + windowSize.height) >=
        document.body.scrollHeight
      ) {
        if (
          (searchValue && limit < filteredPokemons.length) ||
          (windowSize.width <= 768 &&
            (limit === Infinity || limit < filteredPokemons.length))
        ) {
          setLoading(true);
        }

        setTimer(
          setTimeout(() => {
            if (loading) return;

            if (searchValue) {
              setLimit((limit) => limit + (windowSize.width <= 768 ? 20 : 30));
            } else if (windowSize.width <= 768) {
              setLimit(Infinity);
              dispatch(setStep(pagination.step + 20));
            }

            setLoading(false);
          }, 800)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setTimer(null);
    };
  });

  useEffect(() => {
    if (searchValue) {
      setLimit(window.innerWidth <= 768 ? 20 : 30);
    }
  }, [searchValue]);

  return filteredPokemons.length < 1 ? (
    <p className={styles.nothing_was_found}>Nothing was found.</p>
  ) : (
    <>
      <div className={styles.pokemons_list}>
        {filteredPokemons.slice(0, limit).map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
        {loading && (
          <p className={styles.loading_p + " loading_p"}>Loading...</p>
        )}
      </div>
      <Pagination />
    </>
  );
};

export default PokemonsList;
