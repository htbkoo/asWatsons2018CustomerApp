import React from 'react'
import {Button, View, ScrollView, Image} from 'react-native'

import {TabNavigator} from 'react-navigation';
import SwipeScreen from "./SwipeScreen";

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
                        title="Go to Swipe screen"
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

const App = TabNavigator({
    Home: {screen: HomeScreen},
    Swipe: {screen: SwipeScreen},
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        // activeTintColor: '#e91e63',
    },
});

export default App;