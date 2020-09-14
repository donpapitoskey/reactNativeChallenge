import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text, View, StyleSheet, Button, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import client from '../services/apollo';
import { gql } from '@apollo/client';
import Card from '../components/Card';
import Query from '../services/queries';

const EpisodesScreen = (props) => {

  let [arrayEpisodes, setArrayEpisodesValue] = useState([]);
  const [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);
  const [searchNameValue, setSearchNameValue] = useState('Pilot');
  const [searchingPageValue, setSearchingPage] = useState(1);
  const [clearNameVisible, setClearNameVisible] = useState(false);

  const focusedHandler = event => {
    setSearchButton(true);
  };


  useEffect(() => {

  }, [showSearchButton]);

  const onSearchHandler = (event) => {
    setFetchingValue(true);
    client.query({
      query:
        Query({
          typeOfSearch: "episodes",
          searchingPage: searchingPageValue,
          searchName: searchNameValue
        }
        )
    })
      .then(({ data }) => {
        setArrayEpisodesValue(data.episodes.results);
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
    const { name, episode } = itemData.item;
    return (
      <Card
        name={name}
        episode={episode}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              item: itemData.item
            }
          })
        }}
      />
    );
  };

  return (

    <TouchableWithoutFeedback onPress={outsidePressHandler}>
      <View style={styles.screen}>
        <SearchBar
          showSearchButton={showSearchButton}
          focusedHandler={focusedHandler}
          searchNameValue={searchNameValue}
          setSearchNameValue={setSearchNameValue}
          clearNameVisible={clearNameVisible}
          setClearNameVisible={setClearNameVisible}
          episodes={true}
        />
        <Button title="get query" onPress={onSearchHandler} />
        <Text>Episodes Screen</Text>
        {fetching ? <Text>Loading ...</Text> : null}
        <FlatList
          data={arrayEpisodes}
          onEndReachedThreshold={2}
          keyExtractor={(item, index) => item.name}
          renderItem={renderListItem}
          numColumns={1}
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

export default EpisodesScreen;


