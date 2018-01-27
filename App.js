import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Swiper} from "react-native-deck-swiper";
import SwipeExample from "./SwipeExample";

class App extends React.Component {
    render() {
        return (
            <SwipeExample/>
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

export default App;