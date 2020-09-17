import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  FlatList,
} from 'react-native';
import {SearchBar, Card} from '../../components';
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
    console.log(maxPagesValue);

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
        <SearchBar
          showSearchButton={showSearchButton}
          focusedHandler={focusedHandler}
          searchNameValue={searchNameValue}
          searchTypeValue={searchTypeValue}
          setSearchNameValue={setSearchNameValue}
          setSearchTypeValue={setSearchTypeValue}
          setSearchedNameValue={setSearchedNameValue}
          setSearchedTypeValue={setSearchedTypeValue}
          clearNameVisible={clearNameVisible}
          clearTypeVisible={clearTypeVisible}
          setClearNameVisible={setClearNameVisible}
          setClearTypeVisible={setClearTypeVisible}
          onSearch={onNewSearchHandler}
          onPress={outsidePressHandler}
        />
        {fetching ? <Text>Loading ...</Text> : null}
        <Text>
          {' '}
          {searchNameValue.length > 2 && searchTypeValue.length < 1
            ? `Results for search: Name = "${searchedNameValue}"`
            : null}
          {searchTypeValue.length > 2 && searchNameValue.length < 1
            ? `Results for search: Type = "${searchedTypeValue}"`
            : null}
          {searchTypeValue.length > 2 && searchNameValue.length > 2
            ? `Results for search: Name = "${searchedNameValue}" Type = "${searchedTypeValue}"`
            : null}
        </Text>
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
