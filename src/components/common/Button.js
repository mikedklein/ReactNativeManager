import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = ({ children, onPress, style}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
        <Text style={[styles.buttonText, style]}>
          {children}
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'rgba(0,0,0,.12)',
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
});

export { Button };
