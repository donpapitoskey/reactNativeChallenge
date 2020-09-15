import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

const IconButton = props => {

    const { name, onPressAction,style } = props

    return (
        <View style={{...style,...styles.buttonContainer}}>
            <TouchableNativeFeedback onPress={onPressAction}>
                <View style={styles.button}>
                    <Icon name={name} type="ionicon" />
                </View>
            </TouchableNativeFeedback>
        </View>
    );

};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 50,
        overflow: 'hidden'
    },
    button: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    }
});
export default IconButton;