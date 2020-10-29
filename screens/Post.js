import React, { Component, useState, useEffect } from 'react';
import { ScrollView, Keyboard, TouchableWithoutFeedback, Image, 
    Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const DismissKeyboard =({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function Post() {

    const [feed_image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Post</Text>
            </View>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.content}>
                    <View style={styles.picturePicker}>
                        <Button title="Pick an image from camera roll" onPress={pickImage} />
                        {feed_image && <Image source={{ uri: feed_image }} style={{ width: 200, height: 200 }} />}
                    </View>
                    <DismissKeyboard>
                        <View style={styles.inputField}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Caption..." 
                                    placeholderTextColor="gray"

                                    multiline={true}
                                />
                        </View>
                    </DismissKeyboard>
                    <View style={styles.postButCont}>
                        <TouchableOpacity style={styles.postContent} onPress={()=> alert('Posted')}>
                            <Text style={styles.postText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    logo: {
        fontWeight:"bold",
        fontSize:35,
        color:"#D4AF37",
        marginBottom:20,
        marginTop:70,
        marginLeft:20,
    },
    picturePicker: {
        flex: 1, 
        alignItems: 'center', 
        marginTop:20,
    },
    content:{
        flex: 1,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#F4F5F5",
        borderRadius:10,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    input:{
        width:350,
        fontSize:16,
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },
    inputField:{
        marginBottom:59,
        alignItems:'center',
        marginTop:70
    },
    postButCont: {
        justifyContent:'center',
        alignItems:'center',
    },
    postContent:{
        width:"60%",
        backgroundColor:"#D4AF37",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        marginBottom:150
    },
    postText:{
        fontSize:15,
        color:'white',
    },
});