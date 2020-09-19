import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height * 0.8,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    margin: 15,
  },
  imageList: {
    height: '85%',
  },
  image: {
    height: '90%',
    resizeMode: 'contain',
  },
});