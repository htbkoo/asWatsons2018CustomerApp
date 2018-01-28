import React from 'react'
import {Button, Image, ScrollView, View} from 'react-native'

import {StackNavigator} from 'react-navigation';
import SwipeScreen from "./SwipeScreen";
import ShakeScreen from "./ShakeScreen";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.homeContainer}>
                <View style={[styles.center, styles.logoContainer]}>
                    <Image style={styles.logoImage} resizeMode="contain"
                           source={require('./resources/img/ws-logo1.jpg')}/>
                </View>
                <ScrollView/>
                <View>
                    <Button
                        title="Confirm"
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
    logoContainer: {

    },
    logoImage: {
        flex: 1,
        maxHeight: 384,
        maxWidth: 384
    }
};

const App = StackNavigator({
        Home: {screen: HomeScreen},
        Swipe: {screen: SwipeScreen},
        Shake: {screen: ShakeScreen},
    }
);

export default App;