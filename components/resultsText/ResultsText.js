import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const ResultsText = ({searchedNameValue, searchedTypeValue}) => {


  const returnedText = () => {
    let displayText = '';
    if (searchedNameValue.length > 2) {
      displayText = displayText.concat(
        `Results for search: Name = "${searchedNameValue}"`,
      );
      if (searchedTypeValue.length > 2) {
        displayText = displayText.concat(` Type = "${searchedTypeValue}"`);
      } 
    } else {
      if (searchedTypeValue.length > 2) {
        displayText = displayText.concat(
          `Results for search: Type = "${searchedTypeValue}"`,
        );
      }
    }
    return displayText;
  };

  return <Text>{returnedText()} </Text>
};

  

ResultsText.propTypes ={
  searchedNameValue: PropTypes.string,
  searchedTypeValue: PropTypes.string,
};

export default ResultsText;
