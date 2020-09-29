import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const MiniCard = ({image, name}) => (
  <View>
    <View style={styles.container}>
      {image != null && <Image style={styles.image} source={{uri: image}} />}
      <Text>{name}</Text>
    </View>
  </View>
);

MiniCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default MiniCard;
