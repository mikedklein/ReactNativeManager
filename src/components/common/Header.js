import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Header = (props) => {
  let logout = null;

  if (props.loggedIn) {
    logout = (
      <TouchableHighlight
        style={styles.logOutTouch}
        onPress={props.logOutFunc}

      >
        <Text style={styles.logOutText}>
          Logout
        </Text>
      </TouchableHighlight>
    );
  }


  return (
    <View style={styles.viewStyle}>
      <View style={styles.left} />
      <View style={styles.centerHeading} >
        <Text style={styles.textStyle}>
          {props.headerText}
        </Text>
      </View>
      <View style={styles.logOutStyle}>
        {logout}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  left: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  centerHeading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  logOutStyle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logOutText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.27,
    elevation: 2,
    position: 'relative',
    marginBottom: 10
  }
});

export { Header };
