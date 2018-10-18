import React from 'react';
import HomeScreen from './screens/HomeScreen'
import Details from './screens/Details'
import { Card, TouchableHighlight, StyleSheet, Button,Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation'

export default StackNavigator({
  Home:{
    screen: HomeScreen,
  },
  Details:{
    screen: Details
  }
},
{
  initialRouteName: 'Home',
  navigationOptions:{
    headerStyle:{
      backgroundColor: '#f4511e',
    },
    headerTintColor: "#fff",
    headerTitleStyle:{
      fontWeight: 'bold',
    }
  }
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
