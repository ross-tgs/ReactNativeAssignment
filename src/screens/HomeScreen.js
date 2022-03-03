import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux'
import { changeName } from '../actions/name';
import DeviceInfo from 'react-native-device-info';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    DeviceInfo.isEmulator().then((isEmulator) => {
      if (isEmulator) {
        setModalVisible(true);
      }
    });

  }, [])

  const saveName = () => {
    dispatch(changeName(name));
    navigation.navigate('Profile')
  }

  return (
    <View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => { setModalVisible(!modalVisible) }} >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.Alert_Main_View}>
            <Text style={styles.Alert_Title}>Attention</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: '#fff' }} />
            <Text style={styles.Alert_Message}> You are running this app on an emulator! </Text>
            <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} />
            <View style={{ flexDirection: 'row', height: '30%' }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => setModalVisible(false)}
                activeOpacity={0.7}
              >
                <Text style={styles.TextStyle}> OK </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS == 'ios') ? 20 : 0
  },

  Alert_Main_View: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#009688",
    height: 200,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,
  },

  Alert_Title: {
    fontSize: 25,
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '28%'
  },

  Alert_Message: {
    fontSize: 22,
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '42%'
  },

  buttonStyle: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    marginTop: -5
  }
});

export default HomeScreen; 