import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.fontStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

export default ListItem;
