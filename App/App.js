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

import { fetchPokemon } from './Redux/actions'
import { connect } from 'react-redux';

import Styles from './Styles/ApplicationStyle'

class apiCallsPokemon extends Component {

  constructor(props){
    super(props);
  }

  searchPokemon = () => {
    let name = this.state.pokemonName.toLowerCase()
    this.props.getPokemon(name);
  }

  render() {

    let { pokemon, error } = this.props;

    let pokemonInfo = (<View><Text>Name: {pokemon.name}</Text>
            <Text>Weight: {pokemon.weight}</Text>
            <Text>Height: {pokemon.height}</Text>

            <Image
              style={Styles.pokeImage}
              source={{uri: pokemon.image_url}}
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
              animating={this.props.loading}
              size="large"
            />
          </View>
        </View>

        <View style={Styles.informationArea}>
          <Text>{error ? error : '' }</Text>
          <View>
            { (pokemon.name !== undefined) ? pokemonInfo : <Text></Text> }
          </View>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    pokemon: state.get('pokemon'),
    loading: state.get('loading'),
    error:   state.get('error')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemon: (name) => dispatch(fetchPokemon(name))
  };
}

const AppWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(apiCallsPokemon);

export default AppWithRedux;

