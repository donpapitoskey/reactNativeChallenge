import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

const IconButton = props => {

    const { name, onPressAction, style } = props

    return (
        <TouchableNativeFeedback onPress={onPressAction}>
            <View  style={style}>
                <Icon name={name} type="ionicon" />
            </View>
        </TouchableNativeFeedback>

    );

};

export default IconButton;