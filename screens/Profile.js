import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

const Profile = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Profile</Text>
            <View style={styles.items}>
                <Button title='Sign Out' onPress={() => firebase.auth().signOut()} />
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    items: {
        alignItems: 'center',
        marginTop:550
    },
    logo: {
        fontWeight:"bold",
        fontSize:35,
        color:"black",
        marginBottom:20,
        marginTop:70,
        marginLeft:20,
    },
    signBtn:{
        width:"60%",
        backgroundColor:"transparent",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    signText:{
        color:"#AD0000"
    },
});