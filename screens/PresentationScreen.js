import React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const PresentationScreen = props => {
    const date = new Date().toLocaleDateString();
    return (

        <View style={styles.screen}>
            <View style={styles.title}>
                <Text style={{ fontSize: 24 }}>REACT NATIVE CHALLENGE</Text>
                <Text style={{ fontSize: 16 }}>Juan J. Alarcon</Text>
            </View>
            <View>
                <View style={styles.bottomItem}>
                    <Button
                        title="Enter"
                        onPress={() => {
                            props.navigation.replace('Lists')
                        }}
                    />
                </View>
                <View style={styles.bottomItem}>
                    <Text>{date}</Text>
                </View >
            </View >
        </View>

    );
};

PresentationScreen.navigationOptions = {
    headerTitle: 'Introduction',
    headerShown: false
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        paddingTop: 50,
        alignItems: 'center'
    },
    bottomItem: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30


    }
});

export default PresentationScreen;