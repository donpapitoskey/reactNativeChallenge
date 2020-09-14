import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text, View, StyleSheet, Button, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import client from '../services/apollo';
import { gql } from '@apollo/client';
import Card from '../components/Card';
import Query from '../services/queries';



const LocationsScreen = (props) => {

  let [arrayLocations, setArrayLocationsValue] = useState([]);
  const [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);
  const [searchNameValue, setSearchNameValue] = useState('Earth');
  const [searchTypeValue, setSearchTypeValue] = useState('');
  const [searchingPageValue, setSearchingPage] = useState(1);
  const [clearNameVisible, setClearNameVisible] = useState(false);
  const [clearTypeVisible, setClearTypeVisible] = useState(false);

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
          typeOfSearch:"locations",
          searchingPage: searchingPageValue ,
          searchName: searchNameValue ,
          searchType: searchTypeValue
        }
        )
    })
      .then(({ data }) => {
        setArrayLocationsValue(data.locations.results);
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
    const { name, dimension } = itemData.item;
    return (
      <Card 
      name={name}
      dimension={dimension}
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
          searchTypeValue={searchTypeValue}
          setSearchNameValue={setSearchNameValue}
          setSearchTypeValue={setSearchTypeValue}
          clearNameVisible={clearNameVisible}
          clearTypeVisible={clearTypeVisible}
          setClearNameVisible={setClearNameVisible}
          setClearTypeVisible={setClearTypeVisible}
        />
        <Button title="get query" onPress={onSearchHandler} />
        <Text>Characters Screen</Text>
        {fetching ? <Text>Loading ...</Text> : null}
        <FlatList
          data={arrayLocations}
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

export default LocationsScreen;

