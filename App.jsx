import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignUpSuccess from './src/screens/SignUpSuccess';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
