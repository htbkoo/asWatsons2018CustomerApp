import React from 'react'
import {Button} from 'react-native'

import {StackNavigator} from 'react-navigation';
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

const App = StackNavigator({
    Home: {screen: HomeScreen},
    Swipe: {screen: SwipeScreen},
});

export default App;