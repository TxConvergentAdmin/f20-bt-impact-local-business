import React from 'react';
import { ScrollView, Dimensions, Image, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { IconButton, Colors } from 'react-native-paper';

const width = Dimensions.get('window').width

const B = (props) => <Text style = {{fontWeight: 'bold'}}>{props.children}</Text>

const Profile = ({navigation}) => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.containerLeft}>
                        <Text style={styles.logo}>Profile</Text>
                    </View>
                    <View style={styles.containerRight}>
                        <IconButton
                            icon="power-standby"
                            color='#333F48'
                            size={30}
                            onPress={() => firebase.auth().signOut()}
                        />
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <Image 
                        style={styles.userImage} 
                        source={{
                            uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQEpMTHSF4dBDg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=MnrfS1hH3Ss_Gjvb5nCbGI090OPpRGu_00pdXD41BBM'}}
                    />
                    <Text style={styles.profileName}><B>Eric Wang</B> (Cobcannon123)</Text>
                    <Text style={styles.profileText}>Major foodie who loves grilled fish and donuts!</Text>
                    <Text style={styles.profileInfo}><B>14</B> Friends                <B>2</B> Posts</Text>
                </View>
                <View style={styles.listView}>
                    <Image 
                        style={styles.card} 
                        source={{
                            uri: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}
                    />
                    <Image 
                        style={styles.card} 
                        source={{
                            uri: 'https://i.ndtvimg.com/i/2015-10/grilled-fish-625_625x350_41445897097.jpg'}}
                    />
                </View>
                <View style={styles.footer}>

                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;

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
    userImage: {
        width:150,
        height:150,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:150/2
    },
    itemContainer: {
        alignItems: 'center',
        marginTop:10
    },
    profileName: {
        fontSize:20,
        color:"black",
        marginTop:10,
        marginBottom:15,
    },
    profileText: {
        fontSize:15,
        color:"black",
    },
    profileInfo: {
        fontSize:20,
        color:"black",
        marginTop:20,
        marginBottom:30,
    },
    listView: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    card: {
      width: (width / 2) - 15,
      height: (width / 2) - 15,
      marginLeft: 10,
      marginTop: 10
    }, 
    containerRight: {
        marginRight:15,
        marginTop:62,
        flexDirection:'row',
    },
    footer: {
        marginBottom:200
    }
});