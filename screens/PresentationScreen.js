import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const PresentationScreen = props => {

    

    return (
        <View style={styles.screen}> 
            <Text>Presentation Screen</Text>
            <Button 
            title="goto Chars Screen" 
            onPress={() => {
            props.navigation.navigate({routeName: "Lists" })}}/>
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

export default PresentationScreen;