import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  return (
    <Modal
      visible={visible}
      animationType='slide'
      onRequestClose={() => {}}
      transparent
    >
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>
        <CardSection style={styles.cardSection}>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSection: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.67)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
