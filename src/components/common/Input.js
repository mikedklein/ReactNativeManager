import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure, type }) => {
  const { groupStyle, labelStyle, inputStyle } = styles;
  
  let keyboardType = type ? type : 'default';
  
  return (
    <View style={groupStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        secureTextEntry={secure}
        keyboardType={type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupStyle: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
});

export { Input };
