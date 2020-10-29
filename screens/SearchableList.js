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
            name:{first:'Jasmine', last: 'Lu'},
            user:'jlu484',
            picture:'https://i.pinimg.com/736x/fc/45/6a/fc456aba424730185b1496c75c99c7d2.jpg',
        },
        {
            name:{first:'Albert', last: 'Cho'},
            user:'_albertcho_',
            picture:'https://media-exp1.licdn.com/dms/image/C5603AQFJAfjFv76A8g/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=G6DqS5yMxx9F2V8i6aYBSTAoe93_7-KxF62iTX1tQRE',
        },
        {
            name:{first:'Ashray', last: 'Desai'},
            user:'illushray',
            picture:'https://media-exp1.licdn.com/dms/image/C4E03AQEcZa0dO6mqKA/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=LuY6cP7DRw_iZepYkM63EynXpLnpLnqQZp1hoOYejkw',
        },
        {
            name:{first:"Loni", last:"Fogaça"},
            user:'lonny1994',
            picture:'https://randomuser.me/api/portraits/women/16.jpg',
        },
        {
            name:{first:'Nathaniel', last: 'Webb'},
            user:'webbster',
            picture:'https://randomuser.me/api/portraits/men/84.jpg',
        },
        {
            name:{first:'Jarod', last: 'Vester'},
            user:'jv3913',
            picture:'https://randomuser.me/api/portraits/men/98.jpg',
        },
        {
            name:{first:"Elias", last:"Toivonen"},
            user:'smallfrog350',
            picture:'https://randomuser.me/api/portraits/men/28.jpg',
        },
        {
            name:{first:'Nina', last: 'Reid'},
            user:'tinypeacock634',
            picture:'https://randomuser.me/api/portraits/women/37.jpg',
        },
        {
            name:{first:'Laura', last: 'Jackson'},
            user:'greenbird919',
            picture:'https://randomuser.me/api/portraits/women/78.jpg',
        },
        {
            name:{first:'Jason', last:'Math'},
            user:'jmath123',
            picture:'https://i.pinimg.com/originals/5a/c9/d9/5ac9d91aee8d3b1cc377f87220379f88.jpg',
        },
        {
            name:{first:'Kimberly', last:'Ludwig'},
            user:'kimmielud',
            picture:'https://end.org/cms/assets/uploads/2018/02/Kimberly-new-web-pic.jpg',
        },
        {
            name:{first:'Max', last:'Wolfenstein'},
            user:'shoemastercop',
            picture:'https://www.insightpartners.com//assets/media/2018/02/wolff-max-e1519433585742-650x650.jpg',
        },
        {
            name:{first:'Camille', last:'Jack'},
            user:'camille-jj',
            picture:'https://newtv.org/images/assets/New-Facility-Additions/_resampled/croppedimage128128-Ball-Jars-Sharon-Schindler-Photography-2012.jpg',
        },
        {
            name:{first:'Richard', last:'Belson'},
            user:'gavinlovebelson',
            picture:'https://s3-us-west-2.amazonaws.com/assets.coderag.prd/wp-content/uploads/2017/06/coderag_s4_banners_gavin.jpg.png',
        },
      ],
      error: null,
    };

    this.arrayholder = [
        {
            name:{first:'Jasmine', last: 'Lu'},
            user:'jlu484',
            picture:'https://i.pinimg.com/736x/fc/45/6a/fc456aba424730185b1496c75c99c7d2.jpg',
        },
        {
            name:{first:'Albert', last: 'Cho'},
            user:'_albertcho_',
            picture:'https://media-exp1.licdn.com/dms/image/C5603AQFJAfjFv76A8g/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=G6DqS5yMxx9F2V8i6aYBSTAoe93_7-KxF62iTX1tQRE',
        },
        {
            name:{first:'Ashray', last: 'Desai'},
            user:'illushray',
            picture:'https://media-exp1.licdn.com/dms/image/C4E03AQEcZa0dO6mqKA/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=LuY6cP7DRw_iZepYkM63EynXpLnpLnqQZp1hoOYejkw',
        },
        {
            name:{first:"Loni", last:"Fogaça"},
            user:'lonny1994',
            picture:'https://randomuser.me/api/portraits/women/16.jpg',
        },
        {
            name:{first:'Nathaniel', last: 'Webb'},
            user:'webbster',
            picture:'https://randomuser.me/api/portraits/men/84.jpg',
        },
        {
            name:{first:'Jarod', last: 'Vester'},
            user:'jv3913',
            picture:'https://randomuser.me/api/portraits/men/98.jpg',
        },
        {
            name:{first:"Elias", last:"Toivonen"},
            user:'smallfrog350',
            picture:'https://randomuser.me/api/portraits/men/28.jpg',
        },
        {
            name:{first:'Nina', last: 'Reid'},
            user:'tinypeacock634',
            picture:'https://randomuser.me/api/portraits/women/37.jpg',
        },
        {
            name:{first:'Laura', last: 'Jackson'},
            user:'greenbird919',
            picture:'https://randomuser.me/api/portraits/women/78.jpg',
        },
        {
            name:{first:'Jason', last:'Math'},
            user:'jmath123',
            picture:'https://i.pinimg.com/originals/5a/c9/d9/5ac9d91aee8d3b1cc377f87220379f88.jpg',
        },
        {
            name:{first:'Kimberly', last:'Ludwig'},
            user:'kimmielud',
            picture:'https://end.org/cms/assets/uploads/2018/02/Kimberly-new-web-pic.jpg',
        },
        {
            name:{first:'Max', last:'Wolfenstein'},
            user:'shoemastercop',
            picture:'https://www.insightpartners.com//assets/media/2018/02/wolff-max-e1519433585742-650x650.jpg',
        },
        {
            name:{first:'Camille', last:'Jack'},
            user:'camille-jj',
            picture:'https://newtv.org/images/assets/New-Facility-Additions/_resampled/croppedimage128128-Ball-Jars-Sharon-Schindler-Photography-2012.jpg',
        },
        {
            name:{first:'Richard', last:'Belson'},
            user:'gavinlovebelson',
            picture:'https://s3-us-west-2.amazonaws.com/assets.coderag.prd/wp-content/uploads/2017/06/coderag_s4_banners_gavin.jpg.png',
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
      const itemData = `${item.user.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
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
              title={`${item.name.first} ${item.name.last}`}
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
