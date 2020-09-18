import React, {useState} from 'react';
import {
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

const LocationsScreen = (props) => {

  const [arrayLocations, setArrayLocationsValue] = useState([]);
  const [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);
  const [searchNameValue, setSearchNameValue] = useState('');
  const [searchedNameValue, setSearchedNameValue] = useState('');
  const [searchTypeValue, setSearchTypeValue] = useState('');
  const [searchedTypeValue, setSearchedTypeValue] = useState('');
  const [searchingPageValue, setSearchingPage] = useState(1);
  const [maxPagesValue, setMaxPageValue] = useState(2);
  const [clearNameVisible, setClearNameVisible] = useState(false);
  const [clearTypeVisible, setClearTypeVisible] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);

  const focusedHandler = () => {
    setSearchButton(true);
  };

  const onSearchHandler = (newpage, arrayOp) => {
    setFetchingValue(true);
    client
      .query({
        query: Query({
          typeOfSearch: 'locations',
          searchingPage: newpage,
          searchName: searchNameValue,
          searchType: searchTypeValue
        }),
      })
      .then(({data}) => {
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
    if (searchNameValue.length > 2 || searchTypeValue.length > 2) {
      outsidePressHandler();
      onNewSearchHandler();
    }
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

  const Error = () => {
    return <Text> Sorry Morty</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={outsidePressHandler}>
      <View style={styles.screen}>
        <SearchBar>
        <SearchField
            placeholder="Name"
            focusedHandler={focusedHandler}
            showSearchButton={showSearchButton}
            searchInputValue={searchNameValue}
            searchOppositeValue={searchTypeValue}
            setSearchInputValue={setSearchNameValue}
            setSearchedInputValue={setSearchedNameValue}
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
        {errorFlag ? (
          <Text>HOHOHO</Text>
        ) : (
          <FlatList
            data={arrayLocations}
            onEndReachedThreshold={2}
            keyExtractor={(item, index) => item.name}
            renderItem={renderListItem}
            onEndReached={onPageRequestHandler}
            numColumns={1}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LocationsScreen;

