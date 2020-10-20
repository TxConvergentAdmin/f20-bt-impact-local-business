import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

class LoginScreen extends Component {
    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
    };

    onSignIn = (googleUser) => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!this.isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken);
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).then(function(result){console.log('user signed in');
            if(result.additionalUserInfo.isNewUser)
            {
            firebase.database().ref('/users/' + result.user.uid).set({
                gmail: result.user.email,
                profile_picture: result.additionalUserInfo.profile.picture,
                locale: result.additionalUserInfo.profile.locale,
                first_name: result.additionalUserInfo.profile.given_name,
                last_name: result.additionalUserInfo.profile.family_name,
                created_at: Date.now(),
            })
            } else {
                firebase.database().ref('/users/' + result.user.uid).update({last_logged_in:Date.now()})
            }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        }.bind(this)
        );
    };

    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            //  androidClientId: YOUR_CLIENT_ID_HERE,
            behavior:'web',
            iosClientId: '917899898935-nrtakra5qmq6kar68ld7agt4gh00r3td.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>BevoEats</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="black"
                        onChangeText={text => setEmail(text)}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="black"
                        onChangeText={text => setPassword(text)}/>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>this.signInWithGoogleAsync()}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={styles.signUpText}>Signup</Text>
                </TouchableOpacity>
                <View style={styles.googleLogin}>
                    <Button title="Sign In With Google" onPress={() => this.signInWithGoogleAsync()} />
                </View>
            </View>
        );
    }
};

export default LoginScreen;

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
        marginTop:190,
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
    loginBtn:{
        width:"80%",
        backgroundColor:"#BF5700",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    },
    signUpText:{
        color:"black"
    },
    googleLogin:{
        marginTop:200
    }
});