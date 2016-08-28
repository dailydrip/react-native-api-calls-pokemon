import { Network, } from 'react-native'
import Pokemon from '../models/Pokemon'

BASE_URL = "https://pokeapi.co/api/v2"

let pokemonApi = {
  getPokemon: function getPokemon(name){
    let pokemonUrl = `${BASE_URL}/pokemon/${name}/`
    return fetch(pokemonUrl)
      .then((response) => response.json())
      .then((response) => {
        return new Pokemon(response.name, response.weight, response.height,response.sprites.front_shiny)
      })
      .catch((error) => {
        throw 'We could not find this pokemon.';
        console.error(error);
      });
  }
}

export default pokemonApi;