import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const MiniCard = (props) => {
  const {image, name} = props;

  return (
    <View>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={{uri: image}} />}
        <Text>{name}</Text>
      </View>
    </View>
  );
};

MiniCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default MiniCard;
