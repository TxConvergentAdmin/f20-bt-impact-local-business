import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import SearchableFlatList from './SearchableList';
import { IconButton, Colors } from 'react-native-paper';

const Friends = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerLeft}>
                    <Text style={styles.logo}>Profile</Text>
                </View>
                <View style={styles.containerRight}>
                    <IconButton
                        icon="account-multiple-plus"
                        color='#FF1300'
                        size={30}
                    />
                </View>
            </View>
            <SearchableFlatList/>
        </View>
    );
};

export default Friends;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    logo: {
        fontWeight:"bold",
        fontSize:35,
        color:'#D4AF37',
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