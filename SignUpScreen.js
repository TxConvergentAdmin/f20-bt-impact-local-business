import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignUpScreen = ({navigation}) => {
    state={
        email:"",
        password:""
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>SignUp</Text>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="black"
                    onChangeText={text => setEmail(Text)}/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="black"
                    onChangeText={text => setPassword(text)}/>
            </View>
            <TouchableOpacity style={styles.signBtn} onPress={()=>navigation.navigate('BevoEats')}>
                <Text style={styles.signText}>SIGNUP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
        alignItems: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#BF5700",
        marginBottom:40,
        marginTop:190
    },
    inputView:{
        width:"80%",
        backgroundColor:"#F4F5F5",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    forgot:{
        color:"black",
        fontSize:11
    },
    signBtn:{
        width:"80%",
        backgroundColor:"#BF5700",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    signText:{
        color:"white"
    },
});