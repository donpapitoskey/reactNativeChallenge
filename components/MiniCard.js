import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableNativeFeedback } from 'react-native';

const Card = props => {
    const { image, name} = props;

    return (

        <View>
            
                <View  style={styles.container}>
                    {image ? <Image style={styles.image} source={{ uri: image }} /> : null}
                    <Text>{name}</Text>
                </View>
            
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
        height: '70%',

        resizeMode: 'contain'
    }
});

export default Card;
