import React, {Component} from 'react'
import Swiper from 'react-native-deck-swiper'
import {StyleSheet, Text, View, Image, Button} from 'react-native'

import {NavigationActions, withNavigation} from 'react-navigation';

@withNavigation
class SwipeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {src: require('./resources/img/apple.png'), index: 1},
                {src: require('./resources/img/cherry.png'), index: 2},
                {src: require('./resources/img/gift.png'), index: 3},
                {src: require('./resources/img/bone-icon.png'), index: 4}
            ],
            swipedAllCards: false,
            swipeDirection: '',
            isSwipingBack: false,
            cardIndex: 0
        }
    }

    _resetNavigation(targetRoute) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: targetRoute}),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    renderCard = card => {
        return (
            <View style={styles.card}>
                <View style={[styles.cardCenter, styles.logoImage]}>
                    <Image style={styles.cardImage} resizeMode="contain" source={card.src}/>
                </View>
                <Text style={styles.text}>{card.index}</Text>
            </View>
        )
    };

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeBack = () => {
        if (!this.state.isSwipingBack) {
            this.setIsSwipingBack(true, () => {
                this.swiper.swipeBack(() => {
                    this.setIsSwipingBack(false)
                })
            })
        }
    };

    setIsSwipingBack = (isSwipingBack, cb) => {
        this.setState(
            {
                isSwipingBack: isSwipingBack
            },
            cb
        )
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };

    render() {
        console.log("rendered SwipeExample");
        return (
            <View style={styles.container}>
                <View style={styles.container}/>
                <View style={styles.swiperContainer}>
                    <Swiper
                        ref={swiper => {
                            this.swiper = swiper
                        }}
                        backgroundColor={'#FFFFFF'}
                        disableBottomSwipe={true}
                        disableTopSwipe={true}
                        onSwiped={this.onSwiped}
                        onTapCard={this.swipeLeft}
                        cards={this.state.cards}
                        cardStyle={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            width: 'auto',
                            height: 'auto'
                        }}
                        cardIndex={this.state.cardIndex}
                        renderCard={this.renderCard}
                        onSwipedAll={this.onSwipedAllCards}
                        overlayLabels={overlayLabels}
                        animateOverlayLabelsOpacity
                        animateCardOpacity
                    >
                    </Swiper>
                </View>
                <View style={styles.container}>
                    <Button
                        title="I am done!"
                        onPress={this._resetNavigation.bind(this, 'Shake')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#666666",
        padding: "7%"
    },
    swiperContainer: {
        flex: 8,
        backgroundColor: '#F5FCFF'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: '#AAAAAA'
    },
    cardCenter:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    cardImage: {
        maxWidth: "80%",
        maxHeight: "80%",
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
});

const overlayLabels = {
    bottom: {
        title: 'BLEAH',
        style: {
            label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    },
    left: {
        title: 'NOPE',
        style: {
            label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30
            }
        }
    },
    right: {
        title: 'LIKE',
        style: {
            label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30
            }
        }
    },
    top: {
        title: 'SUPER LIKE',
        style: {
            label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
};

export default SwipeScreen;