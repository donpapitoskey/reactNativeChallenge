import React, {useRef} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import IconButton from '../iconButton';

const SearchField = (props) => {

  const {
    placeholder,
    focusedHandler,
    showSearchButton,
    searchInputValue,
    searchOppositeValue,
    setSearchInputValue,
    setSearchedInputValue,
    setSearchedOppositevalue,
    clearInputVisible,
    setClearInputVisible,
    onSearch,
    onPressHandler,
  } = props;

  const inputRef = useRef('');

  const onInputChangeHandler = (text) => {
    setSearchInputValue(text);
    if (text.length > 0) {
      setClearInputVisible(true);
    } else {
      setClearInputVisible(false);
    }
    if (text.length > 2 || searchOppositeValue.length > 2) {
      setSearchedInputValue(text);
      setSearchedOppositevalue(searchOppositeValue);
      onSearch();
    }
  };

  const inputCancelButtonPressedHandler = () => {
    inputRef.current.clear();
    inputRef.current = '';
    setSearchInputValue('');
    setClearInputVisible(false);
    if (searchOppositeValue.length > 2) {
      setSearchedInputValue('');
      onSearch();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        {showSearchButton ? (
          <IconButton name="search" onPressAction={onPressHandler} />
        ) : null}
        <TextInput
          style={styles.text}
          ref={inputRef}
          value={searchInputValue}
          placeholder={inputRef.length < 1 ? null : `${placeholder}...`}
          onFocus={focusedHandler}
          onChangeText={onInputChangeHandler}
          clearButtonMode="unless-editing"
        />
        {clearInputVisible ? (
          <IconButton
            style={{ marginLeft: showSearchButton ? null : 51 }}
            name="close-sharp"
            onPressAction={inputCancelButtonPressedHandler}
          />
        ) : null}
      </View>
    </View>
  );

};


export default SearchField;



