import React from 'react';
import { ScrollView, Card, TouchableHighlight, StyleSheet, Image, Button, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import DetailsButton from '../detailsbutton'
//3374ac8f
const Row = props => (
        <View style={{flex: 1, flexDirection: "row"}}>
          <Image style={{width: 75, height: 150}} source={{uri: `${props.image}`}} />
          <View style={{alignItems: 'right'}}>
            <Text>Film: {props.title}</Text>
            <Text>Release: {props.year}</Text>
            <DetailsButton title={props.title} poster={props.image}/>
          </View>
        </View>
  
)

export default class HomeScreen extends React.Component {
  state = {
    input: '',
    response: '',
    movies:[],
    showMovies: false,
  }

  static navigationOptions = {
    title: "Home Screen",
    headerRight: (
      <Button
        onPress={() => { alert("This is a press") }}
        title="press me"
        color="#fff"
      />
    )
  }
  handleInputChange = (input) => {
    this.setState({showMovies: true})
    this.setState({input})
    fetch(`http://www.omdbapi.com/?apikey=3374ac8f&s=${input}`)
    .then(response=>response.json())
    .then(results =>this.setState({movies: results}))
  }
  render() {
    return (
      <View>
        <TextInput 
          placeholder= "Movie title"
          style={styles.input}
          value = {this.state.input}
          onChangeText = {(input)=>this.handleInputChange(input)}
        />
        {this.state.movies["Search"] ? 
          <ScrollView>
            {this.state.movies["Search"].map(movie=><Row title={movie["Title"]} year= {movie["Year"]} image={movie["Poster"]} />)}
        
          <Text>
            {
              JSON.stringify(this.state.movies["Search"])
            } 
          </Text>
          </ScrollView>
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 50,
    borderColor: "gray",
    borderBottomWidth: 5
  }
})
