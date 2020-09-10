import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LocationsScreen = props => {

    return (
        <View style={styles.screen}> 
            <Text>Locations Screen</Text>
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

export default LocationsScreen;