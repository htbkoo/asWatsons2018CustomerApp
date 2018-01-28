import React from 'react'
import {Button, Image, Picker, ScrollView, Text, View} from 'react-native'
import {StackNavigator} from 'react-navigation';
import SwipeScreen from "./SwipeScreen";
import ShakeScreen from "./ShakeScreen";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            location: "island"
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.homeContainer}>
                <View style={[styles.center]}>
                    <Text style={styles.titleText}>Flash!</Text>
                </View>
                <View style={[styles.center, styles.logoContainer]}>
                    <Image style={styles.logoImage} resizeMode="contain"
                           source={require('./resources/img/bone-icon.png')}/>
                </View>
                <ScrollView/>
                <View>
                    <Picker
                        selectedValue={this.state.location}
                        onValueChange={itemValue => this.setState({location: itemValue})}
                        style={styles.picker}
                    >
                        <Picker.Item label="Hong Kong Island" value="island"/>
                        <Picker.Item label="Kowloon" value="kowloon"/>
                        <Picker.Item label="New Territories" value="nt"/>
                    </Picker>
                </View>
                <View>
                    <Button
                        title="Confirm"
                        onPress={navigate.bind(this, 'Swipe', {location: this.state.location})}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    homeContainer: {
        flex: 1,
        backgroundColor: "#666666",
        padding: "10%"
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoContainer: {},
    logoImage: {
        flex: 1,
        maxHeight: "80%",
        maxWidth: "80%"
    },
    picker: {
        color: "#ffffff"
    },
    titleText: {
        fontSize: 50,
        fontFamily: "",
        color: "#ffffff"
    }
};

const App = StackNavigator({
        Home: {screen: HomeScreen},
        Swipe: {screen: SwipeScreen},
        Shake: {screen: ShakeScreen},
    }
);

export default App;