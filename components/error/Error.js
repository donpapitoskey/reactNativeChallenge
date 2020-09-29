import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Error = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {
        'Sorry Morty,\n\nwe could not find your search :(\n\nTry again with new values :D'
      }
    </Text>
  </View>
);

export default Error;
