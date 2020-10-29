import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

class SignUpScreen extends Component {
    
    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: '',
        })
    }

    signUpUser = (email, password) => {
        try {
            if (this.state.password.length < 6) {
                alert("Please enter atleast 6 characters")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>SignUp</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="black"
                        onChangeText={(email) => this.setState({ email })}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="black"
                        onChangeText={(password) => this.setState({ password })}/>
                </View>
                <TouchableOpacity style={styles.signBtn} onPress={() => this.signUpUser(this.state.email, this.state.password)}>
                    <Text style={styles.signText}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
        );
    }
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
        color:"#FF1300",
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
        backgroundColor:"#D4AF37",
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