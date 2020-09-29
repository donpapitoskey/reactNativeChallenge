import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const CustomText = ({children, fontSize}) => (
  <Text style={{fontSize}}>{children}</Text>
);

CustomText.propTypes = {
  fontSize: PropTypes.number.isRequired,
};

export default CustomText;
