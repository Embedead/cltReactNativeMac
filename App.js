import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from "@react-navigation/native"
import Hello from './components/hello/Hello';
import {Welcome} from "./components/welcome"
import {WebViewComp} from "./components/webView"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { ListView } from './components/list';
import { ListComp } from './components/list/List';

const App = () => {
  const Drawer = createDrawerNavigator();
  
  // const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Hello}/>
      <Drawer.Screen name="Welcome" component={Welcome}/>
      <Drawer.Screen name="Webview" component={WebViewComp}/>
      <Drawer.Screen name="Flatlist" component={ListComp}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
};


export default App;
