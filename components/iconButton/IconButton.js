import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import PropTypes from 'prop-types';

const IconButton = ({name, onPressAction, showSearchButton}) => (
  <View
    style={
      showSearchButton ? styles.buttonContainer : styles.buttonContainerMoved
    }>
    <TouchableNativeFeedback onPress={onPressAction}>
      <View style={styles.button}>
        <Icon name={name} type="ionicon" />
      </View>
    </TouchableNativeFeedback>
  </View>
);


IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPressAction: PropTypes.func,
  style: PropTypes.object,
  showSearchButton: PropTypes.bool,
};

export default IconButton;
