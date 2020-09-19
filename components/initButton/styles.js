import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../styled/theme';

export default StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.3,
    height: 50,
    shadowColor: 'black',
    shadowOpacity: 100,
    shadowOffset: {width: 0, height: 5},
    backgroundColor: theme.color.primary,
    overflow: 'hidden',
    elevation: 3,
  },
  button: {
    height: 50,
    width: Dimensions.get('screen').width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
