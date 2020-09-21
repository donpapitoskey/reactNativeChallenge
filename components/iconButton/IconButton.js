import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import PropTypes from 'prop-types';

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

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPressAction: PropTypes.func,
  style: PropTypes.object,
};

export default IconButton;
