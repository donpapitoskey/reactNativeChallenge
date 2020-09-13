import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

const SearchBar = props => {

    const { focusedHandler, showSearchButton } = props
    return (

        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput style={styles.text}
                        onFocus={focusedHandler}
                        clearButtonMode='unless-editing'
                    />
                </View>
                {showSearchButton ?
                    <View>
                        <Icon name="search" type="ionicon" />
                    </View> : null}
            </View>
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput style={styles.text}
                        onFocus={focusedHandler}
                        clearButtonMode='unless-editing'
                    />
                </View>
                {showSearchButton ?
                    <View>
                        <Icon name="search" type="ionicon" />
                    </View> : null}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 105,
        borderBottomColor: 'black',
        borderBottomWidth: 0.26
    },
    container: {
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    search: {
        backgroundColor: 'white',
        borderColor: "black",
        width: "100%",
        height: 40,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        marginTop: 10
    },
    text: {
        fontSize: 18
    },
    icon: {
        width: 70,
        height: 70
    }
});

export default SearchBar;
