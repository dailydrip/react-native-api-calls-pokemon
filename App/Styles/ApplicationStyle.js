import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
