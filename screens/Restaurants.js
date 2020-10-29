import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import SearchableRestaurants from './SearchableRestaurants';
import { IconButton, Colors } from 'react-native-paper';

const Restaurants = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerLeft}>
                    <Text style={styles.logo}>For You</Text>
                </View>
                <View style={styles.containerRight}>
                    <IconButton
                        icon="bookmark"
                        color='#333F48'
                        size={30}
                    />
                </View>
            </View>
            <SearchableRestaurants/>
        </View>
    );
};

export default Restaurants;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    logo: {
        fontWeight:"bold",
        fontSize:35,
        color:'#BF5700',
        marginBottom:20,
        marginTop:70,
        marginLeft:20,
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    containerRight: {
        marginRight:15,
        marginTop:62,
        flexDirection:'row',
    },
});