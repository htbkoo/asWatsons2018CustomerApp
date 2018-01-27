import React from 'react'
import {Button, View, ScrollView, Image} from 'react-native'

import {StackNavigator} from 'react-navigation';
import SwipeScreen from "./SwipeScreen";
import ShakeScreen from "./ShakeScreen";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.homeContainer}>
                <View style={[styles.center, styles.logoImage]}>
                    <Image source={require('./resources/img/ws-logo1.jpg')}/>
                </View>
                <ScrollView/>
                <View>
                    <Button
                        title="Start Swiping!"
                        onPress={navigate.bind(this, 'Swipe', {})}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    homeContainer: {
        flex: 1,
        backgroundColor: "#01A89E"
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoImage: {}
};

const App = StackNavigator({
        Home: {screen: HomeScreen},
        Swipe: {screen: SwipeScreen},
        Shake: {screen: ShakeScreen},
    }
);

export default App;