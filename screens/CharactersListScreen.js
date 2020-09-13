import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text, View, StyleSheet, Button, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import client from '../services/apollo';
import { useQuery, gql } from '@apollo/client';
import Card from '../components/Card';

const query = gql`
    query {
        characters (filter: {name: "Rick"} page: 1){
            info {
                count
                pages
                next
            }
            results{
                name
                gender
                species
                type
                image
            }
        }
    }

`;

const CharactersScreen = (props) => {

  let [arrayChars, setArrayCharsValue] = useState([]);
  let [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);

  focusedHandler = event => {
    console.log("focused")
    setSearchButton(true);
  };


  useEffect(() => {

  }, [showSearchButton]);

  const onSearchHandler = (event) => {

    setFetchingValue(true);
    client.query({
      query
    })
      .then(({ data }) => {
        console.log(arrayChars)
        setArrayCharsValue(data.characters.results);
        setFetchingValue(false);

      })
      .catch((err) => {
        console.log(err)
      });

  };

  const outsidePressHandler = event => {
    Keyboard.dismiss();
    setSearchButton(false);
  };


  const renderListItem = itemData => {
    const { image, name, dimension, episode } = itemData.item;
    return (
      <Card 
      name={name}
      image={image}
      dimension={dimension}
      episode={episode}
      onSelect={() => {
        props.navigation.navigate({
          routeName: 'Details',
          params: {

          }
        })
      }}
      /> 
    );
  };

  return (

    <TouchableWithoutFeedback onPress={outsidePressHandler}>
      <View style={styles.screen}>
        <SearchBar showSearchButton={showSearchButton} focusedHandler={focusedHandler} />
        <Button title="get query" onPress={onSearchHandler} />
        <Text>Characters Screen</Text>
        {fetching ? <Text>Loading ...</Text> :
          <FlatList data={arrayChars} onEndReachedThreshold={2} keyExtractor={(item, index) => item.name} renderItem={renderListItem} numColumns={1} />}
        <Button
          title="goto Details Screen"
          onPress={() => {
            props.navigation.navigate({ routeName: 'Details' });
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'

  },
});

export default CharactersScreen;
