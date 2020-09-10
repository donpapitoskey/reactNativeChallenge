import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const EpisodesScreen = props => {

    return (
        <View style={styles.screen}> 
            <Text>Episodes Screen</Text>
            <Button 
            title="goto Details Screen" 
            onPress={() => {
            props.navigation.navigate({routeName: "Details" })
            }}/>
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

export default EpisodesScreen;