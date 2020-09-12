import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const Card = props => {
    const { image, name, dimension, episode } = props.item;

    return (
        <View style={styles.container}>
            {image ? <Image style={styles.image} source={{uri: image}}/> : null}
            <Text>{name}</Text>
            {dimension ? <Text > {dimension} </Text> : null}
            {episode ? <Text  >{episode} </Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 15,
        backgroundColor: "gray",
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        
    },
    image: {
        height: '90%',
        
        resizeMode: 'contain'
    }
});

export default Card;
