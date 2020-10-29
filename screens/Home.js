import React, { Component } from 'react'; 
import { Image, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { IconButton, Colors } from 'react-native-paper';

const DATA = [
    {
        user_name:'Jasmine Lu',
        user_image:'https://i.pinimg.com/736x/fc/45/6a/fc456aba424730185b1496c75c99c7d2.jpg',
        feed_image:'https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg',
        user_comment:'Check out this amazing dinner I had last night. Absolutely loved it!',
        user_likes:'130',
        user_chat:'3',
    },
    {
        user_name:'Albert Cho',
        user_image:'https://media-exp1.licdn.com/dms/image/C5603AQFJAfjFv76A8g/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=G6DqS5yMxx9F2V8i6aYBSTAoe93_7-KxF62iTX1tQRE',
        feed_image:'https://miro.medium.com/max/4000/1*yGK9jD35goWdn3XtRq9y4Q.jpeg',
        user_comment:'Tried to be artsy. Had yummy sushi this afternoon with my buddies. I would definetly recommend this place.',
        user_likes:'201',
        user_chat:'8',
    },
    {
        user_name:'Ashray Desai',
        user_image:'https://media-exp1.licdn.com/dms/image/C4E03AQEcZa0dO6mqKA/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=LuY6cP7DRw_iZepYkM63EynXpLnpLnqQZp1hoOYejkw',
        feed_image:'https://cdn.palmbeachillustrated.com/wp-content/uploads/sites/78/2019/08/Indianspread.jpg',
        user_comment:'It is hard to find great Indian food here in Austin but I stumbled across this small restaurant called Biryani Shack. 10/10!',
        user_likes:'176',
        user_chat:'12',
    },
    {
        user_name:'Nina Reid',
        user_image:'https://randomuser.me/api/portraits/women/37.jpg',
        feed_image:'https://i.pinimg.com/originals/cd/f7/ba/cdf7bafce08e39364bd40b328f2fbd5c.jpg',
        user_comment:'Enjoying a cold snack on a cold day. Brrrrrrr!',
        user_likes:'112',
        user_chat:'2',
    },
    {
        user_name:'Kimberly Ludwig',
        user_image:'https://end.org/cms/assets/uploads/2018/02/Kimberly-new-web-pic.jpg',
        feed_image:'https://simply-delicious-food.com/wp-content/uploads/2018/07/mexican-lunch-bowls-3.jpg',
        user_comment:'Boyfriend suprised me with a delicious bowl of avocado, grilled chicken, corn, tomato, and rice.',
        user_likes:'315',
        user_chat:'21',
    },
    {
        user_name:'Max Wolfenstein',
        user_image:'https://www.insightpartners.com//assets/media/2018/02/wolff-max-e1519433585742-650x650.jpg',
        feed_image:'https://assets.bonappetit.com/photos/57ae47b5f1c801a1038bd23a/16:9/w_1000,c_limit/garlic-rosemary-steak.jpg',
        user_comment:'Great grilling weather today! 50 degrees this morning and decided to cook up some streak for lunch, perfect medium rare.',
        user_likes:'142',
        user_chat:'32',
    },
]

function Item({ user_name, user_image, feed_image, user_comment, user_likes, user_chat }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.headerLeft}>
                    <Image
                        style={styles.userImage} 
                        source={{
                            uri: user_image,
                        }}
                    />
                    <Text style={styles.userName}>{ user_name }</Text>
                </View>
                <View style={styles.headerRight}>
                    <AntDesign name="ellipsis1" size={24} color="black" />
                </View>
            </View>
            <Image
                style={styles.feedImage} 
                source={{
                    uri: feed_image,
                }}
            />
            <View style={styles.cardFooter}>
                <View style={styles.footerLeft}>
                    <View style={{ flexDirection:'row' }}>
                        <FontAwesome name="heart-o" size={24} color="black" />
                        <Text styles={{ marginLeft:5, fontSize:16 }}> { user_likes } </Text>
                    </View>
                    <View style={{ flexDirection:'row', marginLeft:12 }}>
                        <FontAwesome name="comment-o" size={24} color="black" />
                        <Text styles={{ marginLeft: 5, fontSize: 16 }}> { user_chat } </Text>
                    </View>
                </View>
            </View>
            <View style={styles.discription}>
                    <Text>
                        { user_comment }
                    </Text>
            </View>
        </View>
    );
}

class Home extends Component {

    createHomeScreenStack = () =>
    <Stack.Navigator>
        <Stack.Screen name="Post" component={ Post }  options={{ headerShown: false }} />
    </Stack.Navigator>

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.containerLeft}>
                        <Text style={styles.logo}>Home</Text>
                    </View>
                    <View style={styles.containerRight}>
                        <IconButton
                            icon="plus-box"
                            color='#333F48'
                            size={30}
                            onPress={() => {this.props.navigation.navigate('Post');}}
                        />
                    </View>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item user_name={item.user_name} 
                        user_name={item.user_name}
                        user_image={item.user_image}
                        feed_image={item.feed_image}
                        user_comment={item.user_comment}
                        user_likes={item.user_likes}
                        user_chat={item.user_chat}
                    />}
                    keyExtractor={item => item.user_name}
                />            
            </View>
        );
    }
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    logo: {
        fontWeight:'bold',
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
    card: {
        padding:10,
        margin:10,
        borderRadius:12,
        backgroundColor:'#F7F7F7'
    },
    cardHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    headerLeft: {
        flexDirection:'row',
    },
    headerRight: {
        marginRight:12,
        marginTop:10,
        flexDirection:'row',
    },
    userImage: {
        width:50,
        height:50,
        borderRadius:50/2
    },
    userName: {
        fontWeight:'bold',
        marginLeft:10,
        marginTop:15,
    },
    feedImage: {
        height:300,
        margin:10,
        borderRadius:10,
        marginVertical:10,
    },
    cardFooter: {
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    footerLeft: {
        flexDirection:'row',
    },
    discription: {
        margin:10,
    }
});