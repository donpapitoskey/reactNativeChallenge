import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const NestedText = ({children, reference}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{reference}</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NestedText;
