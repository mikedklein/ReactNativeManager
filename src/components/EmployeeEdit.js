import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Button, Card, CardSection, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete
} from '../actions';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onDecline = () => {
    this.setState({
      showModal: false
    });
  }

  onAccept = () => {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSavePress}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          onAccept={this.onAccept}
          onDecline={this.onDecline}
          visible={this.state.showModal}
        >
          Are you sure you want to delete this
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
