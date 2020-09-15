import React, { useState, useEffect, useRef } from 'react';
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
  const [maxPagesValue, setMaxPageValue] = useState(2);
  const [clearNameVisible, setClearNameVisible] = useState(false);
  const [clearTypeVisible, setClearTypeVisible] = useState(false);




  const focusedHandler = event => {
    setSearchButton(true);
  };



  useEffect(() => {

  }, [showSearchButton, arrayChars]);

  const onSearchHandler = (newpage, arrayOp) => {
    setFetchingValue(true);
    client.query({
      query:
        Query({
          typeOfSearch: "characters",
          searchingPage: newpage,
          searchName: searchNameValue,
          searchType: searchTypeValue
        }
        )
      ,
    })
      .then(({ data }) => {
        setMaxPageValue(data.characters.info.pages);
        setArrayCharsValue(arrayOp.concat(data.characters.results));
        setFetchingValue(false);
      })
      .catch((err) => {
        console.log(err)
        setFetchingValue(false);
      });
  }

  const onNewSearchHandler = (event) => {
    setArrayCharsValue([]);
    setSearchingPage(1);
    outsidePressHandler();
    onSearchHandler(1, []);
  };

  const onPageRequestHandler = event => {
    console.log(maxPagesValue);
    if (searchingPageValue <= maxPagesValue) {
      const newPage = searchingPageValue + 1;
      console.log(newPage);
      onSearchHandler(newPage, arrayChars);
      setSearchingPage(newPage);
    }
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
        <Button title="get query" onPress={onNewSearchHandler} />
        <Text>Characters Screen</Text>
        {fetching && arrayChars === [] ? <Text>Loading ...</Text> : null}
        <FlatList
          data={arrayChars}
          keyExtractor={(item, index) => item.id}
          renderItem={renderListItem}
          numColumns={1}
          onEndReached={onPageRequestHandler}
          onEndReachedThreshold={2}
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
