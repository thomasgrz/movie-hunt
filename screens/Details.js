import React from 'react';
import { Card, Image, TouchableHighlight, StyleSheet, Button,Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation'

export default class Details extends React.Component{
   static navigationOptions = ({ navigation, navigationOptions })=>{
      const { params } = navigation.state;
      return{
        title: params ? params.movieTitle: "didnt work",
        poster: params ? params.moviePoster: null
      }
   };

   render(){
     /* read params passed in from last screen*/
     const { params } = this.props.navigation.state
     const poster = params ? params.poster: null
     const otherParam = params ? params.otherParam : null;

     return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{height: 300, width: 150}} source={{uri: `${poster}`}}/>
          <Button 
            title="Go to Details ... again"
            onPress={()=>this.props.navigation.navigate('Details')}
          />
          <Button 
            title="Go to back"
            onPress={()=>this.props.navigation.goBack()}
          />
          <Button 
          title="Update Header"
          onPress={()=>{
            this.props.navigation.setParams({otherParam: "Updated!"})
          }} 
        />
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
    }
  })
