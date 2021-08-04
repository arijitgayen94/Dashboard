import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Routes from '../utils/Routes';
import Screens from '../screens';

const AppStack = createStackNavigator();

export default function ({route, navigation}) {
  return (
    <AppStack.Navigator initialRouteName={Routes.Home}>
      <AppStack.Screen
        name={Routes.Home}
        component={Screens.Home}
        options={{headerBackImage: () => null}}
      />
    </AppStack.Navigator>
  );
}
