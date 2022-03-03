///@ts-check

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function FlatButton({ text, onPress, buttonColor, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        margin: 8,
        width: '95%',
        marginBottom: 20,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: buttonColor,
      }}>
        <Text style={{
          color: color ? color : 'white',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: 16,
          textAlign: 'center',
        }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

FlatButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  buttonColor: PropTypes.string,
  color: PropTypes.string,
}