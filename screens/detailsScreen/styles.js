import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width,
    margin: 15,
  },
  image: {
    height: '90%',
    resizeMode: 'contain',
  },
});