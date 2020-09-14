import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text, View, StyleSheet, Button, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import client from '../services/apollo';
import Card from '../components/Card';
import Query from '../services/queries';


const CharactersScreen = (props) => {

  const [arrayChars, setArrayCharsValue] = useState([]);
  const [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);
  const [searchNameValue, setSearchNameValue] = useState('');
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
          typeOfSearch: "characters",
          searchingPage: searchingPageValue,
          searchName: searchNameValue,
          searchType: searchTypeValue
          
        }
        )
      ,
    })
      .then(({ data }) => {
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
    const { image, name, } = itemData.item;
    return (
      <Card
        name={name}
        image={image}
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
          data={arrayChars}
          onEndReachedThreshold={2}
          keyExtractor={(item, index) => item.name}
          renderItem={renderListItem}
          numColumns={1}
          onEndReached={() =>  console.log("fetching hon")}
          onEndReachedThreshold={0.8}
        />
        {fetching ? <Text>Loading ...</Text> : null}

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
