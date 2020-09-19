import React from 'react';
import {View, TouchableNativeFeedback, Text} from 'react-native';
import styles from './styles.js'

const IconButton = (props) => {

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

export default IconButton;