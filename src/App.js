import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fetchPokemonsData } from "./actions/pokemonsActions";
import { HomeContainer, PokemonPageContainer } from "./containers";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsData());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/:id" component={PokemonPageContainer} />
        <Route>404 not found</Route>
      </Switch>
    </Router>
  );
};

export default App;
