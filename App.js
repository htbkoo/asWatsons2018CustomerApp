import React from 'react'
import {Button, View, ScrollView} from 'react-native'

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
    }
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