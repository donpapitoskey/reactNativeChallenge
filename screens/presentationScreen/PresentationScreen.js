import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

const PresentationScreen = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text style={{fontSize: 24}}>REACT NATIVE CHALLENGE</Text>
        <Text style={{fontSize: 16}}>Juan J. Alarcon</Text>
      </View>
      <View>
        <View style={styles.bottomItem}>
          <Button
            title="Enter"
            onPress={() => {
              props.navigation.replace('Lists');
            }}
          />
        </View>
        <View style={styles.bottomItem}>
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default PresentationScreen;