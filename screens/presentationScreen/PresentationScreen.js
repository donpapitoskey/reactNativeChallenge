import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {InitButton, CustomText} from '../../components';

const PresentationScreen = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <CustomText fontSize={24}>REACT NATIVE CHALLENGE</CustomText>
        <CustomText fontSize={16}>Juan J. Alarcon</CustomText>
      </View>
      <View>
        <InitButton
          style={styles.bottomItem}
          onPressAction={() => {
            props.navigation.replace('Lists');
          }}
        />
        <View style={styles.bottomItem}>
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default PresentationScreen;
