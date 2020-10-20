import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    logo: {
        fontWeight:"bold",
        fontSize:35,
        color:"black",
        marginBottom:20,
        marginTop:70,
        marginLeft:20,
    },
});