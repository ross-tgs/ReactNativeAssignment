import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Slider from 'react-native-slide-to-unlock';
import { useDispatch } from 'react-redux'
import { changeName } from '../actions/name';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const saveName = () => {
    dispatch(changeName(name));
    navigation.navigate('Profile')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Type you Name"
      />
      <Button style={styles.button} title="Save" onPress={saveName} />
      {/* <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      /> */}
      {/* <Slider
        childrenContainer={{ backgroundColor: 'red' }}
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
              backgroundColor: 'red',
            }}
            source={{
              uri:
                'https://facebook.github.io/react-native/docs/assets/favicon.png',
            }}
          />
        }
      >
        <Text>{'SLIDE TO UNLOCK'}</Text>
      </Slider> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 35,
    fontSize: 13,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default HomeScreen; 