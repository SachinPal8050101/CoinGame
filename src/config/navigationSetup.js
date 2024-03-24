import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from '../screens/LogInScreen/LogInScreen.component';
import GameScreen from '../screens/GameScreen/GameScreen.component';
import LostScreen from '../screens/LostScreen/LostScreen.component';
import GameHistoryScreen from '../screens/GameHistoryScreen/GameHistoryScreen.component';

const Stack = createNativeStackNavigator();

const AppNavigation = ({isLoggedIn = false}) => {
  return (
    <>
      {!isLoggedIn ? (
        <LogInScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Game">
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="Lost" component={LostScreen} />
            <Stack.Screen name="History" component={GameHistoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default AppNavigation;
