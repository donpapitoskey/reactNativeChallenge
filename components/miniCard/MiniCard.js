import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const MiniCard = (props) => {
  const {image, name} = props;

  return (
    <View>
      <View style={styles.container}>
        {image ? <Image style={styles.image} source={{uri: image}} /> : null}
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default MiniCard;
