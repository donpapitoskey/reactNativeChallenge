import React, {useState, useRef} from 'react';
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
  let searchNameVal = useRef('');
  let searchTypeVal = useRef('');
  let searchedNameVal = useRef('');
  let searchedTypeVal = useRef('');
  const [searchedNameValue, setSearchedNameValue] = useState('');
  const [searchedTypeValue, setSearchedTypeValue] = useState('');
  const [searchTypeValue, setSearchTypeValue] = useState('');
  const [searchingPageValue, setSearchingPage] = useState(1);
  const [maxPagesValue, setMaxPageValue] = useState(2);
  const [clearNameVisible, setClearNameVisible] = useState(false);
  const [clearTypeVisible, setClearTypeVisible] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  
  let acumulator = useRef(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  const focusedHandler = () => {
    setSearchButton(true);
  };

  const onSearchHandler = (newpage, arrayOp) => {
    setFetchingValue(true);
    searchedNameVal = searchNameVal;
    setSearchedNameValue(searchedNameVal.current)
    searchedTypeVal = searchTypeVal;
    setSearchedTypeValue(searchedTypeVal.current)
    console.log(searchedNameVal.current);
    client
      .query({
        query: Query({
          typeOfSearch: 'characters',
          searchingPage: newpage,
          searchName: searchNameVal.current,
          searchType: searchTypeVal.current,
        })
      })
      .then(({data}) => {
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

  const scrollHandler = (nativeEvent) => {
    const dy = nativeEvent.velocity.y;
    acumulator.current = acumulator.current + dy;
    if (acumulator.current > 100 ) {
      acumulator.current = 100;
    }
    if (acumulator.current < 0 ) {
      acumulator.current = 0;
    }
    scrollY.setValue(acumulator.current);
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
              searchInputVal={searchNameVal}
              searchOppositeValue={searchTypeVal.current}
              setSearchInputValue={setSearchNameValue}
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
              searchInputVal={searchTypeVal}
              searchOppositeValue={searchNameVal.current}
              setSearchInputValue={setSearchTypeValue}
              clearInputVisible={clearTypeVisible}
              setClearInputVisible={setClearTypeVisible}
              onSearch={onNewSearchHandler}
              onPressHandler={onPressHandler}
            />
          </SearchBar>
          {fetching ? <Text>Loading ...</Text> : null}
          <ResultsText
            searchedNameValue={searchedNameValue}
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
                onScroll={Animated.event([], {
                  useNativeDriver: false,
                  listener: (e) => scrollHandler(e.nativeEvent),
                })}
              />
            )}
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharactersScreen;
