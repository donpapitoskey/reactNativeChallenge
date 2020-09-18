import React from 'react' ;
import {Text} from 'react-native';

const ResultsText = (props) => {
  const {searchedNameValue, searchedTypeValue} = props;

  return (
    <Text>
      {' '}
      {searchedNameValue.length > 2 && searchedTypeValue.length < 1
        ? `Results for search: Name = "${searchedNameValue}"`
        : null}
      {searchedTypeValue.length > 2 && searchedNameValue.length < 1
        ? `Results for search: Type = "${searchedTypeValue}"`
        : null}
      {searchedTypeValue.length > 2 && searchedNameValue.length > 2
        ? `Results for search: Name = "${searchedNameValue}" Type = "${searchedTypeValue}"`
        : null}
    </Text>
  );
};

export default ResultsText;