import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CharactersScreen = props => {

    return (
        <View style={styles.screen}> 
            <Text>Characters Screen</Text>
        </View>

    ); 
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CharactersScreen;