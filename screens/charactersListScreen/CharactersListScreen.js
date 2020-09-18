import React, { useState, useRef } from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  FlatList,
} from 'react-native';
import {SearchBar, Card, ResultsText, SearchField} from '../../components';
import client from '../../services/apollo';
import Query from '../../services/queries';
import styles from './styles';

const CharactersScreen = (props) => {

  const [arrayChars, setArrayCharsValue] = useState([]);
  const [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);
  const [searchNameValue, setSearchNameValue] = useState('');
  const [searchTypeValue, setSearchTypeValue] = useState('');
  const [searchedNameValue, setSearchedNameValue] = useState('');
  const [searchedTypeValue, setSearchedTypeValue] = useState('');
  const [searchingPageValue, setSearchingPage] = useState(1);
  const [maxPagesValue, setMaxPageValue] = useState(2);
  const [clearNameVisible, setClearNameVisible] = useState(false);
  const [clearTypeVisible, setClearTypeVisible] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;

  const focusedHandler = () => {
    setSearchButton(true);
  };

  const onSearchHandler = (newpage, arrayOp) => {
    setFetchingValue(true);
    client
      .query({
        query: Query({
          typeOfSearch: 'characters',
          searchingPage: newpage,
          searchName: searchNameValue,
          searchType: searchTypeValue,
        })
      })
      .then(({ data }) => {
        setErrorFlag(false);
        setMaxPageValue(data.characters.info.pages);
        setArrayCharsValue(arrayOp.concat(data.characters.results));
        setFetchingValue(false);
      })
      .catch(() => {
        setErrorFlag(true);
        setFetchingValue(false);
      });
  };

  const onNewSearchHandler = () => {
    setArrayCharsValue([]);
    setSearchingPage(1);
    onSearchHandler(1, []);
  };

  const onPageRequestHandler = () => {

    if (searchingPageValue < maxPagesValue) {
      const newPage = searchingPageValue + 1;
      console.log(newPage);
      onSearchHandler(newPage, arrayChars);
      setSearchingPage(newPage);
    }
  };

  const outsidePressHandler = () => {
    Keyboard.dismiss();
    setSearchButton(false);
  };

  const onPressHandler = () => {
    if (searchNameValue.length > 2 || searchTypeValue.length > 2) {
      outsidePressHandler();
      onNewSearchHandler();
    }
  };


  const renderListItem = (itemData) => {
    const {image, name} = itemData.item;
    return (
      <Card
        name={name}
        image={image}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              item: itemData.item,
            },
          });
        }}
      />
    );
  };


  return (
    <TouchableWithoutFeedback onPress={outsidePressHandler}>
      <View style={styles.screen}>
        <Animated.View
          style={{
            ...styles.screen,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 100, 101],
                  outputRange: [0, -100, -100],
                }),
              },
            ],
          }}>
          <SearchBar>
            <SearchField
              placeholder="Name"
              focusedHandler={focusedHandler}
              showSearchButton={showSearchButton}
              searchInputValue={searchNameValue}
              searchOppositeValue={searchTypeValue}
              setSearchInputValue={setSearchNameValue}
              setSearchedInputValue={setSearchedNameValue}
              setSearchedOppositeValue={setSearchedTypeValue}
              clearInputVisible={clearNameVisible}
              setClearInputVisible={setClearNameVisible}
              onSearch={onNewSearchHandler}
              onPressHandler={onPressHandler}
            />
            <SearchField
              placeholder="Type"
              focusedHandler={focusedHandler}
              showSearchButton={showSearchButton}
              searchInputValue={searchTypeValue}
              searchOppositeValue={searchNameValue}
              setSearchInputValue={setSearchTypeValue}
              setSearchedInputValue={setSearchedTypeValue}
              setSearchedOppositeValue={setSearchedNameValue}
              clearInputVisible={clearTypeVisible}
              setClearInputVisible={setClearTypeVisible}
              onSearch={onNewSearchHandler}
              onPressHandler={onPressHandler}
            />
          </SearchBar>
          {fetching ? <Text>Loading ...</Text> : null}
          <ResultsText
            searchNameValue={searchNameValue}
            searchedNameValue={searchedNameValue}
            searchTypeValue={searchTypeValue}
            searchedTypeValue={searchedTypeValue}
          />
          <View>
            {errorFlag ? (
              <Text>HOHOHO</Text>
            ) : (
              <FlatList
                data={arrayChars}
                keyExtractor={(item, index) => item.id}
                renderItem={renderListItem}
                numColumns={1}
                onEndReached={onPageRequestHandler}
                onEndReachedThreshold={2}
                onScroll={Animated.event([
                    {
                      nativeEvent: {
                        contentOffset: {
                          y: scrollY,
                        },
                      },
                    },
                  ],
                  {
                    useNativeDriver: false,
                  }
                )}
              />
            )}
          </View>
          {fetching ? <Text>Loading ...</Text> : null}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharactersScreen;
