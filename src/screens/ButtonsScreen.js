import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { useSelector } from 'react-redux'

const ButtonsScreen = ({ navigation }) => {
  const { name } = useSelector(state => state.user)
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hi nice to meet you {name}!!</Text>
      <Text style={styles.text}>Here are some buttons examples.</Text>
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