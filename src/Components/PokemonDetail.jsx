import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokemonDetail extends Component {
  constructor(props) {
    super(props)
    this.filterPokemon = this.filterPokemon.bind(this)
  }

  filterPokemon() {
    const { pokemons, match } = this.props
    const { pokemonId } = match.params
    return pokemons.filter(pokemon => (pokemon.id === parseInt(pokemonId)))[0]
  }


  render() {
    const { name, type, averageWeight, moreInfo, foundAt } = this.filterPokemon()
    console.log(averageWeight);
    return (
      <div>
        <Link to='/'>Voltar Home</Link>
        <p>Nome: {name} </p>
        <p>Tipo do pokémon: {type} </p>
        <p>Peso do pokémon: {`${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
        <a target='_blank' rel="noopener noreferrer" href={moreInfo}>Sumário informativo: </a>
        <ul>Mapas que mostram as possíveis localizações
          {
            foundAt.map(local => (
              <li key={local.location}>
                {local.location}
                <img src={local.map} alt="" />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}