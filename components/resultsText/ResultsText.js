import React from 'react' ;
import {Text} from 'react-native';

const ResultsText = (props) => {
  const {
    searchNameValue,
    searchedNameValue,
    searchTypeValue,
    searchedTypeValue,
  } = props;

  return (
    <Text>
      {' '}
      {searchedNameValue.length > 2 && searchTypeValue.length < 1
        ? `Results for search: Name = "${searchedNameValue}"`
        : null}
      {searchedTypeValue.length > 2 && searchNameValue.length < 1
        ? `Results for search: Type = "${searchedTypeValue}"`
        : null}
      {searchedTypeValue.length > 2 && searchNameValue.length > 1
        ? `Results for search: Name = "${searchedNameValue}" Type = "${searchTypeValue}"`
        : null}
      {searchedNameValue.length > 2 &&
      searchTypeValue.length > 1 &&
      searchedTypeValue.length < 2
        ? `Results for search: Name = "${searchNameValue}" Type = "${searchedTypeValue}"`
        : null}
    </Text>
  );
};

export default ResultsText;