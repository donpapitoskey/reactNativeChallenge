import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  imageList: {
    height: '85%',
  },
  image: {
    height: '85%',
    resizeMode: 'contain',
  },
});
