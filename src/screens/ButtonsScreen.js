import React from "react";
import { Alert, SafeAreaView, Image, StyleSheet, Text } from "react-native";
import { useSelector } from 'react-redux'
import Slider from 'react-native-slide-to-unlock';
import FlatButton from "../components/FlatButton";

const ButtonsScreen = () => {
  const { name } = useSelector(state => state.user)
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hi nice to meet you {name}!!</Text>
      <Text style={styles.text}>Here are some buttons examples.</Text>
      <FlatButton text="Press me" onPress={() => Alert.alert("clicked")} buttonColor={'#fff'} color={'#0000ff'} />
      <FlatButton text="Press me" onPress={() => Alert.alert("clicked")} buttonColor={'#f01d71'} color={'#fff'} />
      <FlatButton text="Press me" onPress={() => Alert.alert("Clicked")} buttonColor={'#0000ff'} color={'#fff'} />
      <Slider
        childrenContainer={{ backgroundColor: 'white' }}
        onEndReached={() => {
          Alert.alert('Attention', 'onEndReached!');
        }}
        containerStyle={{
          margin: 8,
          backgroundColor: 'white',
          borderRadius: 10,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%'
        }}
        sliderElement={
          <Image
            style={{
              width: 50,
              margin: 4,
              borderRadius: 5,
              height: 50,

            }}
            source={{
              uri:
                'https://wallpaperaccess.com/full/210048.jpg',
            }}
          />
        }
      >
        <Text>{'Slide me to Continue'}</Text>
      </Slider>
    </SafeAreaView >
  )
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  }
});

export default ButtonsScreen;