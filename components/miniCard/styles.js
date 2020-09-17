import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 15,
    backgroundColor: '#EDF2F4',
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width * 0.6,
    borderWidth: 1,
    justifyContent: 'center',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: 'black',
    borderRightColor: 'black',
  },
  image: {
    height: '70%',
    resizeMode: 'contain',
  },
});
