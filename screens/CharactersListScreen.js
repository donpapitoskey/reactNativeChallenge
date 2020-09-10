import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {PanGestuteHandler} from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';

const CharactersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <SearchBar />
      <Text>Characters Screen</Text>
      <Button
        title="goto Details Screen"
        onPress={() => {
          props.navigation.navigate({routeName: 'Details'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CharactersScreen;
