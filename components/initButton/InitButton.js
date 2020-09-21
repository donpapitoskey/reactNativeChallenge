import React from 'react';
import {View, TouchableNativeFeedback, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const InitButton = (props) => {

  const {onPressAction, style} = props;

  return (
    <View style={{...style, ...styles.buttonContainer}}>
      <TouchableNativeFeedback onPress={onPressAction}>
        <View style={styles.button}>
          <Text style={styles.text}>Start</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

InitButton.propTypes = {
  onPressAction: PropTypes.func,
  stle: PropTypes.object,
}

export default InitButton;
