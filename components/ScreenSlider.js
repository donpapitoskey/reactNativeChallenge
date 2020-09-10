import React, { useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View, PanResponder } from 'react-native';



const ScreenSlider = props => {
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPan
        })
    )
    return (
        <PanGestureHandler>


        </PanGestureHandler>
    );
}

const styles = StyleSheet.create({

})

export default ScreenSlider;