import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import styles from './styles';

const Card = (props) => {
  const {image, name, dimension, episode, onSelect} = props;

  return (
    <View>
      <TouchableNativeFeedback style={{flex: 1}} onPress={onSelect}>
        <View style={styles.container}>
          {image ? <Image style={styles.image} source={{uri: image}} /> : null}
          <Text>{name}</Text>
          {dimension ? <Text>{dimension} </Text> : null}
          {episode ? <Text>{episode} </Text> : null}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
export default Card;
