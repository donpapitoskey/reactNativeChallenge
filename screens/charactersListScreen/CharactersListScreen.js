import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  FlatList,
} from 'react-native';
import client from '../../services/apollo';
import {Card, SearchBar} from '../../components';
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

  const renderListItem = (itemData) => {
    const {name, image} = itemData.item;
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
          onSearch={onNewSearchHandler}
          onPress={outsidePressHandler}
        />
        <Text>
          {searchedNameValue !== ''
            ? `Results for the search: Name : ${searchedNameValue}`
            : null}
        </Text>
        {fetching ? <Text>Loading ...</Text> : null}
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

export default CharactersScreen;
