import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/RegisterScreen';
import LoginScreen from './src/LoginScreen';
import GamesSelection from './src/GamesSelection';
import Selection1 from './src/Selection1';
import Selection2 from './src/Selection2';
import LobbyScreen1 from './src/LobbyScreen1';
import LobbyScreen2 from './src/LobbyScreen2';
import Game14 from './src/game1/Game14'; 
import Game15 from './src/game1/Game15'; 
import Game16 from './src/game1/Game16'; 
import Game17 from './src/game1/Game17'; 

const Stack = createStackNavigator();


export class App extends Component {
  render() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="GameSelection" component={GamesSelection}/>  
          <Stack.Screen name="Selection1" component={Selection1}/> 
          <Stack.Screen name="Selection2" component={Selection2}/> 
          <Stack.Screen name="Game14" component={Game14}></Stack.Screen>
          <Stack.Screen name="Game15" component={Game15}></Stack.Screen>
          <Stack.Screen name="Game16" component={Game16}></Stack.Screen>
          <Stack.Screen name="Game17" component={Game17}></Stack.Screen>
          <Stack.Screen name="LobbyScreen1" component={LobbyScreen1}></Stack.Screen>
          <Stack.Screen name="LobbyScreen2" component={LobbyScreen2}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App