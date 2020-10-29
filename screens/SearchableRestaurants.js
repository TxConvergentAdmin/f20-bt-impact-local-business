import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class FlatListDemo extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        data: 
        [
            {
                name:{first:'Ramen Tatsu-Ya', last: 'Japanese'},
                user:'1234 S Lamar Blvd, Austin, TX 78704',
                picture:'https://i.pinimg.com/originals/7e/7e/93/7e7e938e9821be8c99c63fca9a2f068f.png',
            },
            {
                name:{first:'Loro', last: 'Asian-American'},
                user:'2115 S Lamar Blvd, Austin, TX 78704',
                picture:'https://s3.amazonaws.com/cuag/entities/000/131/700/avatar180-240f1790603f67d52b442a02d5d57c80-110-137-816-736.jpg',
            },
            {
                name:{first:'Kokodak', last: 'Korean'},
                user:'2522 Guadalupe St, Austin, TX 78705',
                picture:'https://pbs.twimg.com/profile_images/2217729421/kokodak_new_400x400.jpg',
            },
            {
                name:{first:"Siena Restaurant", last: 'Italian'},
                user:'6203 N Capital of Texas Hwy, Austin, TX 78731',
                picture:'https://sienaaustin.com/wp-content/uploads/2019/02/Siena-Toscana-logo-2x.png',
            },
            {
                name:{first:'Snooze, an A.M. Eatery', last: 'American'},
                user:'3800 N Lamar Blvd Suite 120, Austin, TX 78756',
                picture:'https://www.snoozeeatery.com/wp-content/uploads/2019/10/Logo.jpg',
            },
            {
                name:{first:"Hopdoddy Burger Bar", last: 'American'},
                user:'4615 N Lamar Blvd Suite 307, Austin, TX 78751',
                picture:'https://i.pinimg.com/originals/a6/d0/cf/a6d0cf480d58e252fda2a9f23d64ff0d.png',
            },
            {
                name:{first:"Z'Tejas", last: 'Mexican'},
                user:'9400 A, Arboretum Blvd, Austin, TX 78759',
                picture:'https://www.24-7pressrelease.com/assets/attachments/046/press_release_distribution_0464922_142950.jpg',
            },
            {
                name:{first:'North Italia', last: 'Italian'},
                user:'11506 Century Oaks Terrace Suite 124, Austin, TX 78758',
                picture:'https://pinpointretail.com/wp-content/uploads/2017/05/projects-northitalia.png',
            },
            {
                name:{first:'Roaring Fork', last: 'American'},
                user:'701 Congress Ave, Austin, TX 78701',
                picture:'https://arizonarestaurantweek.com/wp-content/uploads/2019/08/roaring-fork-logo.jpg',
            },
            {
                name:{first:'Sway', last: 'Thai'},
                user:'11501 Rock Rose Ave #100, Austin, TX 78758',
                picture:'https://s3.amazonaws.com/toasttab/restaurants/restaurant-54416000000000000/restaurant_1593444511_180.png',
            },
            {
                name:{first:'Frost Gelato', last: 'Dessert'},
                user:'11700 Rock Rose Ave suite 176 suite 176, Austin, TX 78758',
                picture:'https://gpsvnet.net/wp-content/uploads/2017/05/frost.jpeg',
            },
            {
                name:{first:'JINYA Ramen Bar', last: 'Japanese'},
                user:'3210 Esperanza Crossing Suite 130, Austin, TX 78758',
                picture:'https://pbs.twimg.com/profile_images/916114096742793216/3VVRQT9R.jpg',
            },
            {
                name:{first:'Culinary Dropout', last: 'American'},
                user:'11721 Rock Rose Ave Ste #100, Austin, TX 78758',
                picture:'https://2.bp.blogspot.com/-1-mRiBiJdfc/UKGM5b3SRcI/AAAAAAAABqw/oEq0dufAJQU/s1600/culinarydropout-logo.jpeg',
            },
            {
                name:{first:'SUSHI JUNAI 1', last: 'Japanese'},
                user:'1612 Lavaca St, Austin, TX 78701',
                picture:'https://media.glassdoor.com/sqll/3005343/sushi-junai-omakase-squarelogo-1567659183552.png',
            },
        ],
        error: null,
      };
  
      this.arrayholder = [
        {
          name:{first:'Ramen Tatsu-Ya', last: 'Japanese'},
          user:'1234 S Lamar Blvd, Austin, TX 78704',
          picture:'https://i.pinimg.com/originals/7e/7e/93/7e7e938e9821be8c99c63fca9a2f068f.png',
      },
      {
          name:{first:'Loro', last: 'Asian-American'},
          user:'2115 S Lamar Blvd, Austin, TX 78704',
          picture:'https://s3.amazonaws.com/cuag/entities/000/131/700/avatar180-240f1790603f67d52b442a02d5d57c80-110-137-816-736.jpg',
      },
      {
          name:{first:'Kokodak', last: 'Korean'},
          user:'2522 Guadalupe St, Austin, TX 78705',
          picture:'https://pbs.twimg.com/profile_images/2217729421/kokodak_new_400x400.jpg',
      },
      {
          name:{first:"Siena Restaurant", last: 'Italian'},
          user:'6203 N Capital of Texas Hwy, Austin, TX 78731',
          picture:'https://sienaaustin.com/wp-content/uploads/2019/02/Siena-Toscana-logo-2x.png',
      },
      {
          name:{first:'Snooze, an A.M. Eatery', last: 'American'},
          user:'3800 N Lamar Blvd Suite 120, Austin, TX 78756',
          picture:'https://www.snoozeeatery.com/wp-content/uploads/2019/10/Logo.jpg',
      },
      {
          name:{first:"Hopdoddy Burger Bar", last: 'American'},
          user:'4615 N Lamar Blvd Suite 307, Austin, TX 78751',
          picture:'https://i.pinimg.com/originals/a6/d0/cf/a6d0cf480d58e252fda2a9f23d64ff0d.png',
      },
      {
          name:{first:"Z'Tejas", last: 'Mexican'},
          user:'9400 A, Arboretum Blvd, Austin, TX 78759',
          picture:'https://www.24-7pressrelease.com/assets/attachments/046/press_release_distribution_0464922_142950.jpg',
      },
      {
          name:{first:'North Italia', last: 'Italian'},
          user:'11506 Century Oaks Terrace Suite 124, Austin, TX 78758',
          picture:'https://pinpointretail.com/wp-content/uploads/2017/05/projects-northitalia.png',
      },
      {
          name:{first:'Roaring Fork', last: 'American'},
          user:'701 Congress Ave, Austin, TX 78701',
          picture:'https://arizonarestaurantweek.com/wp-content/uploads/2019/08/roaring-fork-logo.jpg',
      },
      {
          name:{first:'Sway', last: 'Thai'},
          user:'11501 Rock Rose Ave #100, Austin, TX 78758',
          picture:'https://s3.amazonaws.com/toasttab/restaurants/restaurant-54416000000000000/restaurant_1593444511_180.png',
      },
      {
          name:{first:'Frost Gelato', last: 'Dessert'},
          user:'11700 Rock Rose Ave suite 176 suite 176, Austin, TX 78758',
          picture:'https://gpsvnet.net/wp-content/uploads/2017/05/frost.jpeg',
      },
      {
          name:{first:'JINYA Ramen Bar', last: 'Japanese'},
          user:'3210 Esperanza Crossing Suite 130, Austin, TX 78758',
          picture:'https://pbs.twimg.com/profile_images/916114096742793216/3VVRQT9R.jpg',
      },
      {
          name:{first:'Culinary Dropout', last: 'American'},
          user:'11721 Rock Rose Ave Ste #100, Austin, TX 78758',
          picture:'https://2.bp.blogspot.com/-1-mRiBiJdfc/UKGM5b3SRcI/AAAAAAAABqw/oEq0dufAJQU/s1600/culinarydropout-logo.jpeg',
      },
      {
          name:{first:'SUSHI JUNAI 1', last: 'Japanese'},
          user:'1612 Lavaca St, Austin, TX 78701',
          picture:'https://media.glassdoor.com/sqll/3005343/sushi-junai-omakase-squarelogo-1567659183552.png',
      },
        ];
    }
  
    componentDidMount() {
      
    }
  
    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '86%',
            backgroundColor: '#FAFDFF',
            marginLeft: '14%',
          }}
        />
      );
    };
  
    searchFilterFunction = text => {
      this.setState({
        value: text,
      });
  
      const newData = this.arrayholder.filter(item => {
        const itemData = `${item.user.toUpperCase()} ${item.name.first.toUpperCase()}`;
        const textData = text.toUpperCase();
  
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        data: newData,
      });
    };
  
    renderHeader = () => {
      return (
        <SearchBar
        containerStyle={{backgroundColor: 'white',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent'}}
          inputStyle={{color: 'black'}}
          placeholder="Type Here..."
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
        />
      );
    };
  
    render() {
      if (this.state.loading) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        );
      }
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                leftAvatar={{ source: { uri: item.picture } }}
                title={`${item.name.first} (${item.name.last})`}
                subtitle={item.user}
              />
            )}
            keyExtractor={item => item.user}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
      );
    }
  }
  
  export default FlatListDemo;