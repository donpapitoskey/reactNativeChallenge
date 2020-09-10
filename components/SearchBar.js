import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const SearchBar = props => {
    return(
        
        <View style ={styles.container}>
            <TextInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: 'gray',
        height: 30
    }
});

export default SearchBar;
