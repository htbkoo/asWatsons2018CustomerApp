import React, {Component} from 'react'
import {Button, StyleSheet, View} from 'react-native'
import ShakeSensor from "./ShakeSensor";

import {NavigationActions, withNavigation} from 'react-navigation';

@withNavigation
class ShakeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    _resetNavigation(targetRoute) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: targetRoute}),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        console.log("rendered ShakeScreen");
        return (
            <View style={styles.shakeContainer}>
                <ShakeSensor/>
                <Button
                    title="Back to Home"
                    onPress={this._resetNavigation.bind(this, 'Home')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    shakeContainer: {
        flex: 1,
        backgroundColor: "#666666",
        padding: "10%",
        justifyContent: "space-around"
    },
});

export default ShakeScreen;