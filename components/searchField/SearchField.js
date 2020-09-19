import React, {useRef} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import IconButton from '../iconButton';

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
    console.log(searchOppositeValue);
    if (searchOppositeValue.length > 2) {
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
          ref={(input) => (inputRef = input)}
          placeholder={inputRef.length < 1 ? null : `${placeholder}...`}
          onFocus={focusedHandler}
          onChangeText={onInputChangeHandler}
          clearButtonMode="unless-editing"
        />
        {clearInputVisible ? (
          <IconButton
            style={{marginLeft: showSearchButton ? null : 51}}
            name="close-sharp"
            onPressAction={inputCancelButtonPressedHandler}
          />
        ) : null}
      </View>
    </View>
  );

};


export default SearchField;



