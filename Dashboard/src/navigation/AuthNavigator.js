import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Routes from '../utils/Routes';
import Screens from '../screens';

const AuthStack = createStackNavigator();

export default function AuthNavigation({navigation}) {
  return (
    <AuthStack.Navigator initialRouteName={Routes.Login}>
      <AuthStack.Screen
        name={Routes.Login}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={Routes.FirstStep}
        component={Screens.FirstStep}
        options={{title: 'Step 1'}}
      />
      <AuthStack.Screen
        name={Routes.SecondStep}
        component={Screens.SecondStep}
        options={{title: 'Step 2'}}
      />
      <AuthStack.Screen
        name={Routes.Register}
        component={Screens.Register}
        options={{title: 'Done', headerBackImage: () => null}}
      />
    </AuthStack.Navigator>
  );
}
