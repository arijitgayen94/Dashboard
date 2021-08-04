import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Routes from '../utils/Routes';
import Screens from '../screens';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigator';

const RootStack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.Login}
        screenOptions={{
          animationEnabled: false,
          header: false,
        }}>
        <RootStack.Screen
          name={Routes.Login}
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={Routes.App}
          component={AppNavigation}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
