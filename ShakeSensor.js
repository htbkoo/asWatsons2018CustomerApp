import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Accelerometer} from 'expo';

const GRAVITY_EARTH = 9.80665;

export default class ShakeSensor extends React.Component {
    state = {
        accelerometerData: {},
        mAccelCurrent: GRAVITY_EARTH,
        mAccelLast: GRAVITY_EARTH,
        mAccel: 0,
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
        Accelerometer.setUpdateInterval(1000);
    };

    _fast = () => {
        Accelerometer.setUpdateInterval(16);
    };

    _subscribe = () => {
        this._subscription = Accelerometer.addListener(accelerometerData => {
            this.setState(this._getUpdatedState(accelerometerData));
        });
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    _getUpdatedState(accelerometerData) {
        let {x, y, z} = accelerometerData;
        let mAccelLast = this.state.mAccelCurrent;
        let mAccelCurrent = Math.sqrt(x * x + y * y + z * z);
        let delta = mAccelCurrent - mAccelLast;
        let mAccel = this.state.mAccel * 0.9 + delta; // perform low-cut filter
        return {
            mAccelCurrent,
            mAccelLast,
            mAccel,
            accelerometerData
        }
    }

    render() {
        let hasShaken = this.state.mAccel > 12;
        let {x, y, z} = this.state.accelerometerData;

        let content = hasShaken
            ? (<View>
                <Image source={require("./resources/img/elephant.jpg")}/>
            </View>)
            : (<View>
                <Text>Not shaken :(</Text>
            </View>);

        return (
            <View style={styles.sensor}>
                <Text>Accelerometer:</Text>
                <Text>x: {round(x)} y: {round(y)} z: {round(z)} mAccel: {round(this.state.mAccel)} mAccelLast: {round(this.state.mAccelLast)} mAccelCurrent: {round(this.state.mAccelCurrent)}</Text>
                {content}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this._toggle} style={styles.button}>
                        <Text>Toggle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
                        <Text>Slow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._fast} style={styles.button}>
                        <Text>Fast</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    sensor: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
});

