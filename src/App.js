import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fetchPokemonsData } from "./actions/pokemonsActions";
import {
  HomePageContainer,
  PokemonPageContainer,
  PageNotFoundContainer,
} from "./containers";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsData());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/:id" component={PokemonPageContainer} />
        <Route component={PageNotFoundContainer} />
      </Switch>
    </Router>
  );
};

export default App;
