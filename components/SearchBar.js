import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-ionicons';

const SearchBar = props => {

    const { focusedHandler, showSearchButton } = props
    return (

        <View style={styles.header}>
            <View style={styles.container}>
                <TextInput style={styles.text}
                    onFocus={focusedHandler}
                    clearButtonMode='unless-editing'
                />
                {showSearchButton ?
                    <View>
                        <Icon name="search" />
                    </View> : null}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 105,
        borderBottomColor: 'black',
        borderBottomWidth: 0.26
    },
    container: {
        width: '80%',
        backgroundColor: 'white',
        borderColor: "black",
        height: 40,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    text: {
        fontSize: 18
    },
    icon: {
        width: 50
    }
});

export default SearchBar;
