import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import ShakeSensor from "./ShakeSensor";

class ShakeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        console.log("rendered ShakeScreen");
        return (
            <View style={styles.shakeContainer}>
                <ShakeSensor/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    shakeContainer: {
        flex: 1,
        backgroundColor: "#01A89E",
    },
});

export default ShakeScreen;