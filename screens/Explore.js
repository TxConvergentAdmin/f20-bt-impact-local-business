import React from 'react';
import { StyleSheet, Navigator, View, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Overlay } from 'react-native-elements';
import Constants from "expo-constants";

const GOOGLE_PLACES_API_KEY = 'AIzaSyCRvjNwULOJ8FoG3it1aoqekYXfcFik0Fk'
var lat = 0;
var lon = 0;

export default class Explore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
      latitude: 100,
      longitude: 100,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    }
    };
  }
render() {
    return (
      <View style={styles.container}>
      <View style= {{flex: 1, flexDirection: 'row', backgroundColor: 'black'}, styles.mapStyle}>
        <View style = {{height: 180, marginTop: 40, backgroundColor: '#FAFDFF', padding:20}}>
        <GooglePlacesAutocomplete

            placeholder="Search Location"
            //style={styles.container}
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              lat = details.geometry.location.lat;
              lon = details.geometry.location.lng;
            }}

            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en", // language of the results
            }}
            listViewDisplayed={true}
          /></View>

          <View>
          <MapView
              style={styles.mapStyle}
              initialRegion={this.state.region}
              showsUserLocation={true}
//onMapReady={this.onMapReady}
              //onRegionChangeComplete={this.onRegionChange}
              ><Marker
              coordinate={{ "latitude": this.state.region.latitude,
              "longitude": this.state.region.longitude }}
              pinColor="red"
              title={"Your Location"}
              draggable />
          </MapView> 

          <Marker
              coordinate={{ "latitude": lat,
              "longitude": lon }}
              title={"New Location"}
              draggable />


        </View>
      </View>
      </View>




    );

  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFDFF",
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});

