import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

const IconButton = (props) => {

  const {name, onPressAction, style} = props;

  return (
    <View style={{...style, ...styles.buttonContainer}}>
      <TouchableNativeFeedback onPress={onPressAction}>
        <View style={styles.button}>
          <Icon name={name} type="ionicon" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default IconButton;
