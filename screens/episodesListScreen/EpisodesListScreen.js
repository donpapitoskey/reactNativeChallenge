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
        <SearchBar
          showSearchButton={showSearchButton}
          focusedHandler={focusedHandler}
          searchNameValue={searchNameValue}
          setSearchedNameValue={setSearchedNameValue}
          setSearchNameValue={setSearchNameValue}
          clearNameVisible={clearNameVisible}
          setClearNameVisible={setClearNameVisible}
          episodes={true}
          onPress={outsidePressHandler}
          onSearch={onNewSearchHandler}
        />
        <Text>
          {searchedNameValue !== ''
            ? `Results for the search: Name : ${searchedNameValue}`
            : null}
        </Text>
        {fetching ? <Text>Loading ...</Text> : null}
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


