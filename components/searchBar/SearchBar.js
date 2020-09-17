import React from 'react';
import {View, TextInput } from 'react-native';
import styles from './styles';

const SearchBar = ({children}) => {
  return <View style={styles.header}>{children}</View>;
};

export default SearchBar;
