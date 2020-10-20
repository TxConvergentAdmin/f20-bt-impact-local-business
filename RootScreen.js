import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPs from './ForgotPs';
import HomeScreen from './HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class RootScreen extends Component {

    createHomeStack = () =>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={ LoginScreen } />
        <Stack.Screen name="SignUp" component={ SignUpScreen } />
    </Stack.Navigator>

    render() {
        return (
        /*<LoginScreen />*/
        <NavigationContainer>
            {/*<HomeScreen />*/}
            
            <Stack.Navigator>
                <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={ SignUpScreen } options={{ headerShown: false }} />
                <Stack.Screen name="Forgot" component={ ForgotPs } options={{ headerShown: false }} />
                <Stack.Screen name="BevoEats" component={ HomeScreen } options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
        );
    }
}

export default RootScreen;