import React from 'react';
import {View} from 'react-native';
import SearchField from '../SearchField';
import styles from './styles';
import PropTypes from 'prop-types';

const SearchBar = (props) => {

  const {
    focusedHandler,
    showSearchButton,
    clearNameVisible,
    setClearNameVisible,
    onNewSearchHandler,
    onPressHandler,
    clearTypeVisible,
    setClearTypeVisible,
    isEpisode,
  } = props;

  let {searchNameVal, searchTypeVal} = props;

  return (
    <View style={styles.header}>
      <SearchField
        placeholder="Name"
        focusedHandler={focusedHandler}
        showSearchButton={showSearchButton}
        searchInputVal={searchNameVal}
        searchOppositeValue={searchTypeVal}
        clearInputVisible={clearNameVisible}
        setClearInputVisible={setClearNameVisible}
        onSearch={onNewSearchHandler}
        onPressHandler={onPressHandler}
      />
      {!isEpisode && <SearchField
          placeholder="Type"
          focusedHandler={focusedHandler}
          showSearchButton={showSearchButton}
          searchInputVal={searchTypeVal}
          searchOppositeValue={searchNameVal}
          clearInputVisible={clearTypeVisible}
          setClearInputVisible={setClearTypeVisible}
          onSearch={onNewSearchHandler}
          onPressHandler={onPressHandler}
        />
      }
    </View>
  );
};

SearchBar.propTypes = {
  focusedHandler: PropTypes.func,
  showSearchButton: PropTypes.bool,
  clearNameVisible: PropTypes.bool,
  setClearNameVisible: PropTypes.func,
  onNewSearchHandler: PropTypes.func,
  onPressHandler: PropTypes.func,
  clearTypeVisible: PropTypes.bool,
  setClearTypeVisible: PropTypes.func,
  isEpisode: PropTypes.bool,
  searchNameVal: PropTypes.shape({current: PropTypes.string}),
  searchTypeVal: PropTypes.shape({current: PropTypes.string}),
};

export default SearchBar;
