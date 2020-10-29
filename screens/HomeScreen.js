import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Friends from './Friends';
import Explore from './Explore';
import Profile from './Profile';
import Restaurants from './Restaurants';
import Post from './Post';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {

    createHomeScreenStack = () =>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={ Home } options={{ headerShown: false }} />
            <Stack.Screen name="Post" component={ Post } options={{ headerShown: false }}/>
        </Stack.Navigator>

    return (
        <NavigationContainer independent={ true }>
            <Tab.Navigator screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size }) => { let iconName;
                    if (route.name === 'Home') {
                      iconName = 'ios-home';
                    } else if (route.name === 'Friends') {
                      iconName = 'ios-happy';
                    }
                    else if (route.name === 'Explore') {
                      iconName = 'ios-search';
                    }
                    else if (route.name === 'Profile') {
                      iconName = 'ios-list';
                    }
                    else if (route.name === 'For You') {
                      iconName = 'ios-restaurant';
                    }


                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                })}
                tabBarOptions={{
                  activeTintColor: '#BF5700',
                  inactiveTintColor: '#333F48',
                  }}>
                <Tab.Screen name="Home" component={ createHomeScreenStack } options={{ headerShown: false }} />
                <Tab.Screen name="Friends" component={ Friends } options={{ headerShown: false }} />
                <Tab.Screen name="Explore" component={ Explore } options={{ headerShown: false }} />
                <Tab.Screen name="For You" component={ Restaurants } options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ Profile } options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

});