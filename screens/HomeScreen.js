import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Friends from './Friends';
import Explore from './Explore';
import Profile from './Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {

    createHomeScreenStack = () =>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={ Home }  options={{ headerShown: false }} />
        </Stack.Navigator>

    return (
        <NavigationContainer independent={ true }>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ createHomeScreenStack } options={{ headerShown: false }} />
                <Tab.Screen name="Friends" component={ Friends } options={{ headerShown: false }} />
                <Tab.Screen name="Explore" component={ Explore } options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ Profile } options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

});