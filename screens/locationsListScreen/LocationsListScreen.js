import React, {useState, useRef} from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  FlatList,
} from 'react-native';
import {
  SearchBar,
  Card,
  ResultsText,
  SearchField,
  Error,
} from '../../components';
import client from '../../services/apollo';
import Query from '../../services/queries';
import styles from './styles';

const LocationsScreen = (props) => {

  const [arrayLocations, setArrayLocationsValue] = useState([]);
  const [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);
  const [searchedNameValue, setSearchedNameValue] = useState('');
  const [searchedTypeValue, setSearchedTypeValue] = useState('');
  const [searchingPageValue, setSearchingPage] = useState(1);
  const [maxPagesValue, setMaxPageValue] = useState(2);
  const [clearNameVisible, setClearNameVisible] = useState(false);
  const [clearTypeVisible, setClearTypeVisible] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);

  let searchNameVal = useRef('');
  let searchTypeVal = useRef('');
  let searchedNameVal = useRef('');
  let searchedTypeVal = useRef('');
  let acumulator = useRef(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  const focusedHandler = () => {
    setSearchButton(true);
  };

  const onSearchHandler = (newpage, arrayOp) => {
    setFetchingValue(true);
    searchedNameVal = searchNameVal;
    setSearchedNameValue(searchedNameVal.current);
    searchedTypeVal = searchTypeVal;
    setSearchedTypeValue(searchedTypeVal.current);
    client
      .query({
        query: Query({
          typeOfSearch: 'locations',
          searchingPage: newpage,
          searchName: searchNameVal.current,
          searchType: searchTypeVal.current,
        }),
      })
      .then(({ data }) => {
        setErrorFlag(false);
        setMaxPageValue(data.locations.info.pages);
        setArrayLocationsValue(arrayOp.concat(data.locations.results));
        setFetchingValue(false);
      })
      .catch(() => {
        setErrorFlag(true);
        setFetchingValue(false);
      });
  };

  const onNewSearchHandler = () => {
    setArrayLocationsValue([]);
    setSearchingPage(1);
    onSearchHandler(1, []);
  };

  const onPageRequestHandler = () => {

    if (searchingPageValue < maxPagesValue) {
      const newPage = searchingPageValue + 1;
      onSearchHandler(newPage, arrayLocations);
      setSearchingPage(newPage);
    }
  };

  const outsidePressHandler = () => {
    Keyboard.dismiss();
    setSearchButton(false);
  };

  const onPressHandler = () => {
    if (searchNameVal.current.length > 2 || searchTypeVal.current.length > 2) {
      outsidePressHandler();
      onNewSearchHandler();
    }
  };

  const scrollHandler = (nativeEvent) => {
    const dy = nativeEvent.velocity.y;
    acumulator.current = acumulator.current + dy;
    if (acumulator.current > 115) {
      acumulator.current = 115;
    }
    if (acumulator.current < 0 ) {
      acumulator.current = 0;
    }
    scrollY.setValue(acumulator.current);
  };


  const renderListItem = (itemData) => {
    const {name, dimension} = itemData.item;
    return (
      <Card
        name={name}
        dimension={dimension}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              item: itemData.item,
            }
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
                  inputRange: [0, 115, 116],
                  outputRange: [0, -115, -115],
                }),
              },
            ],
          }}>
          <SearchBar>
            <SearchField
              placeholder="Name"
              focusedHandler={focusedHandler}
              showSearchButton={showSearchButton}
              searchInputVal={searchNameVal}
              searchOppositeValue={searchTypeVal.current}
              clearInputVisible={clearNameVisible}
              setClearInputVisible={setClearNameVisible}
              onSearch={onNewSearchHandler}
              onPressHandler={onPressHandler}
            />
            <SearchField
              placeholder="Type"
              focusedHandler={focusedHandler}
              showSearchButton={showSearchButton}
              searchInputVal={searchTypeVal}
              searchOppositeValue={searchNameVal.current}
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
              <Error /> 
            ) : (
              <FlatList
                data={arrayLocations}
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

export default LocationsScreen;

