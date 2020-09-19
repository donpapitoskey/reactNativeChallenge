import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../styled/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 15,
    backgroundColor: theme.color.cardBackground,
    maxHeight: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width * 0.6,
    borderWidth: 1,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: {height: 40, width: 0},
    elevation: 3,
    justifyContent: 'center',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: 'black',
    borderRightColor: 'black',
  },
  image: {
    height: '90%',
    resizeMode: 'contain',
  },
});