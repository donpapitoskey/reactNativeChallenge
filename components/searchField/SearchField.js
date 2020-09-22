import React, {useRef} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import IconButton from '../IconButton';
import PropTypes from 'prop-types';

const SearchField = (props) => {

  const {
    placeholder,
    focusedHandler,
    showSearchButton,
    searchOppositeValue,
    clearInputVisible,
    setClearInputVisible,
    onSearch,
    onPressHandler,
  } = props;

  let {searchInputVal} = props;

  let inputRef = useRef(placeholder);

  const onInputChangeHandler = (text) => {
    searchInputVal.current = text;
    if (text.length > 0) {
      setClearInputVisible(true);
    } else {
      setClearInputVisible(false);
    }
    if (text.length > 2) {
      onSearch();
    }
  };

  const inputCancelButtonPressedHandler = () => {
    inputRef.focus();
    inputRef.clear();
    inputRef.current = '';
    searchInputVal.current = '';
    setClearInputVisible(false);
    if (searchOppositeValue.current.length > 2) {
      onSearch();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        {showSearchButton &&
          <IconButton
            name="search"
            onPressAction={onPressHandler}
            showSearchButton={true}
          />
        }
        <TextInput
          style={styles.text}
          ref={(input) => (inputRef = input)}
          placeholder={inputRef.length < 1 ? null : `${placeholder}...`}
          onFocus={focusedHandler}
          onChangeText={onInputChangeHandler}
          clearButtonMode="unless-editing"
        />
        {clearInputVisible ? (
          <IconButton
            showSearchButton={showSearchButton}
            name="close-sharp"
            onPressAction={inputCancelButtonPressedHandler}
          />
        ) : null}
      </View>
    </View>
  );

};

SearchField.propTypes = {
  placeholder: PropTypes.string,
  focusedHandler: PropTypes.func,
  showSearchButton: PropTypes.bool,
  searchOppositeValue: PropTypes.shape({current: PropTypes.string}),
  clearInputVisible: PropTypes.bool,
  setClearInputVisible: PropTypes.func,
  onSearch: PropTypes.func,
  onPressHandler: PropTypes.func,
  searchInputVal: PropTypes.shape({current: PropTypes.string}),
};

export default SearchField;

