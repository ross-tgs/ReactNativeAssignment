import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { useSelector } from 'react-redux'

const ProfileScreen = ({ navigation }) => {
  const { name } = useSelector(state => state.user)
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hi nice to meet you {name}!!</Text>
      <Button title="Next" onPress={() => navigation.navigate("Buttons")} />
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

export default ProfileScreen;