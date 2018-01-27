import React from 'react'
import {Button} from 'react-native'

import {TabNavigator} from 'react-navigation';
import SwipeScreen from "./SwipeScreen";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Swipe screen"
                onPress={navigate.bind(this, 'Swipe', {name: 'Jane'})}
            />
        );
    }
}

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