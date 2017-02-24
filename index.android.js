import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  Image,
  ActivityIndicator,
  View
} from 'react-native';

import PokeAPI from './API/Pokemon'

class apiCallsPokemon extends Component {

  constructor(props){
    super(props);
    this.state = { pokemonName: '', pokemon: '', animating: false, error: '' }
    this.searchPokemon = this.searchPokemon.bind(this)
  }

  searchPokemon(){
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
              style={styles.pokeImage}
              source={{uri: this.state.pokemon.image_url}}
            /></View>);

    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.welcome}>
            POKEDEX
          </Text>
        </View>
        <View style={styles.searchArea}>
          <TextInput
            style={styles.inputPoke}
            placeholder="Search your pokemon name here"
            onChangeText={(text) => this.setState({pokemonName: text})}
          />

          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight style={styles.button} onPress={this.searchPokemon}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableHighlight>

            <ActivityIndicator
              animating={this.state.animating}
              size="large"
            />
          </View>
        </View>

        <View style={styles.informationArea}>
          <Text>{this.state.error ? this.state.error : '' }</Text>
          <View>
            { this.state.pokemon ? pokemonInfo : <Text></Text> }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleArea: {
    flex: 1,
    marginTop: 100,
  },
  searchArea: {
    flex: 1,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationArea: {
    flex: 3,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputPoke: {
    color: 'white',
    height: 40,
    width: 400,
    textAlign: 'center',
    backgroundColor: '#3f89e2',
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#3f89e2',
  },
  indicator: {
    marginTop: 10,
    paddingLeft: 10
  },
  buttonText: {
    color:'#fff',
  },
  pokeImage: {
    width: 200,
    height: 200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('apiCallsPokemon', () => apiCallsPokemon);
