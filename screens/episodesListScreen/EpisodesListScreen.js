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

const EpisodesScreen = (props) => {

  const [arrayEpisodes, setArrayEpisodesValue] = useState([]);
  const [fetching, setFetchingValue] = useState(false);
  const [showSearchButton, setSearchButton] = useState(false);
  const [searchNameValue, setSearchNameValue] = useState('');
  const [searchedNameValue, setSearchedNameValue] = useState('');
  const [searchingPageValue, setSearchingPage] = useState(1);
  const [maxPagesValue, setMaxPageValue] = useState(2);
  const [clearNameVisible, setClearNameVisible] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);

  const focusedHandler = () => {
    setSearchButton(true);
  };

  const onSearchHandler = (newpage, arrayOp) => {
    setFetchingValue(true);
    client
      .query({
        query: Query({
          typeOfSearch: 'episodes',
          searchingPage: newpage,
          searchName: searchNameValue,
        })
      })
      .then(({data}) => {
        setErrorFlag(false);
        setMaxPageValue(data.episodes.info.pages);
        setArrayEpisodesValue(arrayOp.concat(data.episodes.results));
        setFetchingValue(false);
      })
      .catch(() => {
        setErrorFlag(true);
        setFetchingValue(false);
      });
  };
  
  const onNewSearchHandler = (event) => {
    setArrayEpisodesValue([]);
    setSearchingPage(1);
    onSearchHandler(1, []);
  };

  const onPageRequestHandler = () => {
    if (searchingPageValue < maxPagesValue) {
      const newPage = searchingPageValue + 1;
      onSearchHandler(newPage, arrayEpisodes);
      setSearchingPage(newPage);
    }
  };

  const outsidePressHandler = () => {
    Keyboard.dismiss();
    setSearchButton(false);
  };

  const onPressHandler = () => {
    if (searchNameValue.length > 2) {
      outsidePressHandler();
      onNewSearchHandler();
    }
  };

  const renderListItem = (itemData) => {
    const {name, episode} = itemData.item;
    return (
      <Card
        name={name}
        episode={episode}
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
        <SearchBar>
          <SearchField 
            placeholder="Name"
            focusedHandler={focusedHandler}
            showSearchButton={showSearchButton}
            searchInputValue={searchNameValue}
            searchOppositeValue={''}
            setSearchInputValue={setSearchNameValue}
            setSearchedInputValue={setSearchedNameValue}
            clearInputVisible={clearNameVisible}
            setClearInputVisible={setClearNameVisible}
            onSearch={onNewSearchHandler}
            onPressHandler={onPressHandler}
          />
        </SearchBar>
        {fetching ? <Text>Loading ...</Text> : null}
        <ResultsText
          searchNameValue={searchNameValue}
          searchedNameValue={searchedNameValue}
          searchTypeValue={''}
          searchedTypeValue={''}
        />
        <FlatList
          data={arrayEpisodes}
          onEndReachedThreshold={2}
          keyExtractor={(item, index) => item.id}
          renderItem={renderListItem}
          numColumns={1}
          onEndReached={onPageRequestHandler}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EpisodesScreen;


