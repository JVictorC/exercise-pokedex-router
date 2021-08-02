import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetail from './Components/PokemonDetail';
import AboutPokedex from './Components/AboutPokedex';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <Pokedex pokemons={pokemons} />} />
          <Route
            exact path='/pokemon/:pokemonId'
            component={(props) => <PokemonDetail {...props} pokemons={pokemons} />}
          />
          <Route exact patch='/about' component={AboutPokedex} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;