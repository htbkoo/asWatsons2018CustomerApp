import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {Gyroscope} from 'expo';

const GRAVITY_EARTH = 9.80665;

export default class ShakeSensor extends React.Component {
    state = {
        accelerometerData: {},
        mAccelCurrent: GRAVITY_EARTH,
        mAccelLast: GRAVITY_EARTH,
        mAccel: 0,
        hasShaken: false
    };

    componentDidMount() {
        this._toggle();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _toggle = () => {
        if (this._subscription) {
            this._unsubscribe();
        } else {
            this._subscribe();
        }
    };

    _slow = () => {
        Gyroscope.setUpdateInterval(1000);
    };

    _fast = () => {
        Gyroscope.setUpdateInterval(16);
    };

    _subscribe = () => {
        this._subscription = Gyroscope.addListener(accelerometerData => {
            this.setState(this._getUpdatedState(accelerometerData));
        });
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    // reference: https://stackoverflow.com/a/2318356
    _getUpdatedState(accelerometerData) {
        let {x, y, z} = accelerometerData;
        let mAccelLast = this.state.mAccelCurrent;
        let mAccelCurrent = Math.sqrt(x * x + y * y + z * z);
        let delta = mAccelCurrent - mAccelLast;
        let mAccel = this.state.mAccel * 0.9 + delta; // perform low-cut filter
        let hasShaken = this.state.hasShaken || (mAccel > 2);
        return {
            mAccelCurrent,
            mAccelLast,
            mAccel,
            accelerometerData,
            hasShaken
        }
    }

    render() {
        console.log(this.state.hasShaken);

        let text = this.state.hasShaken ? "Thank you!" : "Shake!";

        let content = this.state.hasShaken
            ? <Image style={styles.giftImage} resizeMode="contain" source={require('./resources/img/gift.png')}/>
            : <ActivityIndicator size="large" color="#0000ff"/>;

        return (
            <View style={styles.shakeSensor}>
                <View style={styles.container}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={styles.giftImageContainer}>
                    {content}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    giftImageContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
    },
    middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    shakeSensor: {
        flex: 1,
        marginTop: 15,
        paddingHorizontal: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        color: "#ffffff",
        backgroundColor: 'transparent'
    },
    giftImage: {
        flex: 1,
        maxWidth: "80%",
        maxHeight: "80%"
    }
});

