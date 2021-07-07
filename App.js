import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Facebook from './screens/fb';
import Instagram from './screens/in';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator ({
  Facebook: Facebook,
  Instagram: Instagram
});

const AppContainer = createAppContainer (TabNavigator);

//<Text style = {{fontSize: 40, textAlign: 'center', fontColor: 'blue'}}>Buzz App</Text>