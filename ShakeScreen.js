import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import AccelerometerSensor from "./AcecelerometerSensor";

class ShakeScreen extends Component {
    render() {
        console.log("rendered ShakeScreen");
        return (
            <View style={styles.shakeContainer}>
                <AccelerometerSensor/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    shakeContainer: {
        flex: 1,
        backgroundColor: '#EEEEFF'
    },
});

export default ShakeScreen;