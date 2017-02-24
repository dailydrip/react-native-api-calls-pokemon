import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TouchableHighlight,
  TextInput,
  Image,
  ActivityIndicator,
  View
} from 'react-native';

import PokeAPI from '../API/Pokemon'
import Styles from './Styles/ApplicationStyle'

export default class apiCallsPokemon extends Component {

  constructor(props){
    super(props);
    this.state = { pokemonName: '', pokemon: '', animating: false, error: '' }
  }

  searchPokemon = () => {
    this.setState({error: '', animating: true})

    PokeAPI.getPokemon(this.state.pokemonName.toLowerCase()).then((pokemon) => {
      this.setState({animating: false})
      this.setState({pokemon})

    }).catch((error) => {
      this.setState({error, animating: false})
    });
  }
  render() {

    let pokemonInfo = (<View><Text>Name: {this.state.pokemon.name}</Text>
            <Text>Weight: {this.state.pokemon.weight}</Text>
            <Text>Height: {this.state.pokemon.height}</Text>

            <Image
              style={Styles.pokeImage}
              source={{uri: this.state.pokemon.image_url}}
            /></View>);

    return (
      <View style={Styles.container}>
        <View style={Styles.titleArea}>
          <Text style={Styles.welcome}>
            POKEDEX
          </Text>
        </View>
        <View style={Styles.searchArea}>
          <TextInput
            style={Styles.inputPoke}
            placeholder="Search your pokemon name here"
            onChangeText={(text) => this.setState({pokemonName: text})}
          />

          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight style={Styles.button} onPress={this.searchPokemon}>
              <Text style={Styles.buttonText}>Search</Text>
            </TouchableHighlight>

            <ActivityIndicator
              animating={this.state.animating}
              size="large"
            />
          </View>
        </View>

        <View style={Styles.informationArea}>
          <Text>{this.state.error ? this.state.error : '' }</Text>
          <View>
            { this.state.pokemon ? pokemonInfo : <Text></Text> }
          </View>
        </View>
      </View>
    );
  }
}

