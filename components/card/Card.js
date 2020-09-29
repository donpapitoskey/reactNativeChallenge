import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Card = ({image, name, dimension, episode, onSelect}) => (
  <View>
    <TouchableNativeFeedback style={styles.touchable} onPress={onSelect}>
      <View style={styles.container}>
        {image != null && <Image style={styles.image} source={{uri: image}} />}
        <Text>{name}</Text>
        {dimension != null && <Text>{dimension} </Text>}
        {episode != null && <Text>{episode} </Text>}
      </View>
    </TouchableNativeFeedback>
  </View>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  dimension: PropTypes.string,
  episode: PropTypes.string,
  onSelect: PropTypes.func,
};

export default Card;
