import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const NestedText = ({children, reference}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{reference}</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

NestedText.propTypes = {
  children: PropTypes.string,
  reference: PropTypes.string,
}

export default NestedText;
