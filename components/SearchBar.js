import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';


const SearchBar = props => {

    return (

        <View style={styles.container}>
            <TextInput  />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: 'white',
        borderColor: "black",
        height: 30,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    }
});

export default SearchBar;
