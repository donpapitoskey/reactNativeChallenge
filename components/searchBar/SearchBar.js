import React, {useRef} from 'react';
import {View, TextInput} from 'react-native';
import IconButton from '../iconButton';
import styles from './styles';
const SearchBar = (props) => {
  const {
    focusedHandler,
    showSearchButton,
    searchNameValue,
    searchTypeValue,
    setSearchTypeValue,
    setSearchNameValue,
    setSearchedNameValue,
    setSearchedTypeValue,
    clearNameVisible,
    clearTypeVisible,
    setClearNameVisible,
    setClearTypeVisible,
    episodes,
    onPress,
    onSearch,
  } = props;

  const nameRef = useRef('');
  const typeRef = useRef('');

  const onNameChangeHandler = (text) => {
    setSearchNameValue(text);
    if (text.length > 0) {
      setClearNameVisible(true);
    } else {
      setClearNameVisible(false);
    }
    if (text.length > 2 || searchTypeValue.length > 2) {
      setSearchedNameValue(text);
      onSearch();
    }
  };
  const onTypeChangeHandler = (text) => {
    setSearchTypeValue(text);
    if (text.length > 0) {
      setClearTypeVisible(true);
    } else {
      setClearTypeVisible(false);
    }
    if (text.length > 2 || searchNameValue.length > 2){
      setSearchedTypeValue(text);
      onSearch();
    }

  };

  const nameCancelButtonPressedHandler = () => {
    nameRef.current.clear();
    nameRef.current = '';
    setSearchNameValue('');
    setClearNameVisible(false);
    if (searchTypeValue.length > 2) {
      setSearchedNameValue('');
      onSearch();
    }
  };

  const typeCancelButtonPressedHandler = () => {
    typeRef.current.clear();
    typeRef.current = '';
    setSearchTypeValue('');
    setClearTypeVisible(false);
    if (searchNameValue.length > 2) {
      setSearchedTypeValue('');
      onSearch();
    }
  };

  const onPressHandler = () => {
    if (searchNameValue.length > 2 || searchTypeValue.length > 2) {
      onPress();
      onSearch();
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.search}>
          {showSearchButton ? (
            <IconButton name="search" onPressAction={onPressHandler} />
          ) : null}
          <TextInput
            style={styles.text}
            ref={nameRef}
            value={searchNameValue}
            placeholder={nameRef.length < 1 ? null : 'Name...'}
            onFocus={focusedHandler}
            onChangeText={onNameChangeHandler}
            clearButtonMode="unless-editing"
          />
          {clearNameVisible ? (
            <IconButton
              style={{marginLeft: showSearchButton ? null : 51}}
              name="close-sharp"
              onPressAction={nameCancelButtonPressedHandler}
            />
          ) : null}
        </View>
      </View>
      {episodes ? null : (
        <View style={styles.container}>
          <View style={styles.search}>
            {showSearchButton ? (
              <View>
                <IconButton name="search" onPressAction={onPressHandler} />
              </View>
            ) : null}
            <TextInput
              style={styles.text}
              placeholder={typeRef.length < 1 ? null : 'Type...'}
              ref={typeRef}
              onFocus={focusedHandler}
              onChangeText={onTypeChangeHandler}
              clearButtonMode="unless-editing"
            />
            {clearTypeVisible ? (
              <IconButton
                name="close-sharp"
                style={{marginLeft: showSearchButton ? null : 51}}
                onPressAction={typeCancelButtonPressedHandler}
              />
            ) : null}
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchBar;
