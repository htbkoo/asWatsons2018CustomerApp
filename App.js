import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import {Swiper} from "react-native-deck-swiper";
import SwipeExample from "./SwipeExample";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.fullScreen}>
                <Header
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={{text: 'Swipe to choose your product', style: {color: '#fff'}}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
                <View style={styles.container}>
                    <SwipeExample/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
