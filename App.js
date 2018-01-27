import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';
import {Swiper} from "react-native-deck-swiper";
import SwipeExample from "./SwipeExample";
import SwipeCard from "./SwipeCard";

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SwipeCard/>
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

export default App;