import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';

import firebase from 'firebase';

class LoadingScreen extends Component {

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user =>
        {
            console.log('auth state change called');
            if(user)
            {
                this.props.navigation.navigate('HomeScreen');
            }
            else {
                this.props.navigation.navigate('RootScreen');
            }
        });
      };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});