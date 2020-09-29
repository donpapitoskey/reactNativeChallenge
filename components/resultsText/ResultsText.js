import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const ResultsText = ({searchedNameValue, searchedTypeValue}) => {

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

ResultsText.propTypes ={
  searchedNameValue: PropTypes.string,
  searchedTypeValue: PropTypes.string,
};

export default ResultsText;
