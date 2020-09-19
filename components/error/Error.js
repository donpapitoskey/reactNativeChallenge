import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sorry Morty,</Text>
        <Text style={styles.text}>we could not find your search :(</Text>
      <Text style={styles.text}>Try again with new values :D</Text>
    </View>
  );
};

export default Error;