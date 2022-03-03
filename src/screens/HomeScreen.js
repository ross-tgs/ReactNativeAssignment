import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from 'react-redux'
import { changeName } from '../actions/name';
import DeviceInfo from 'react-native-device-info';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    DeviceInfo.isEmulator().then((isEmulator) => {
      if (isEmulator) {
        Alert.alert('Attention', 'You are running this app on emulator!');
      }
    });

  }, [])

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