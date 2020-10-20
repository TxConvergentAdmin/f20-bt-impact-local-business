import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const ForgotPs = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Forgot Password?</Text>
            <Text style={styles.forgot}>Enter your email below and we will send you a link to get back into your account</Text>
            <View style={styles.inputView}>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="black"
                    onChangeText={text => this.setState({email:text})}/>
            </View>
            <TouchableOpacity style={styles.sendBtn} onPress={()=>alert('Signing Up')}>
                <Text style={styles.sendText}>SEND EMAIL</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
        alignItems: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:35,
        color:"#BF5700",
        marginBottom:40,
        marginTop:190
    },
    forgot:{
        fontSize:15,
        color:"#888888",
        marginBottom:20,
        marginLeft:15,
        width:300
    },
    inputView:{
        width:"80%",
        backgroundColor:"#F4F5F5",
        borderRadius:25,
        height:50,
        marginBottom:20,
        marginTop:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    sendBtn:{
        width:"80%",
        backgroundColor:"#BF5700",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    sendText:{
        color:"white"
    },
});