import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 105,
    borderBottomColor: 'black',
    borderBottomWidth: 0.26,
  },
  container: {
    width: '80%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  search: {
    backgroundColor: 'white',
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    width: '69%',
  },
  icon: {
    width: 70,
    height: 70,
  }
});
