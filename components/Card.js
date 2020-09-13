import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableNativeFeedback } from 'react-native';

const Card = props => {
    const { image, name, dimension, episode, onSelect } = props;

    return (

        <View>
            <TouchableNativeFeedback 
            style={{ flex: 1 }}
            onPress={onSelect}>
                <View  style={styles.container}>
                    {image ? <Image style={styles.image} source={{ uri: image }} /> : null}
                    <Text>{name}</Text>
                    {dimension ? <Text > {dimension} </Text> : null}
                    {episode ? <Text  >{episode} </Text> : null}
                </View>
            </TouchableNativeFeedback>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 15,
        backgroundColor: "#EDF2F4",
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.6,
        borderWidth: 1,
        justifyContent: 'center',
        borderLeftColor: "white",
        borderTopColor: "white",
        borderBottomColor: "black",
        borderRightColor: "black"

    },
    image: {
        height: '90%',

        resizeMode: 'contain'
    }
});

export default Card;
