import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const CustomText = (props) => {
  const {children, fontSize} = props;
  return <Text style={{fontSize: fontSize}}>{children}</Text>;
};

CustomText.propTypes = {
  fontSize: PropTypes.number.isRequired,
};

export default CustomText;
