import React, {Component} from 'react'
import Swiper from 'react-native-deck-swiper'
import {StyleSheet, Text, View} from 'react-native'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: ['1', '2', '3'],
            swipedAllCards: false,
            swipeDirection: '',
            isSwipingBack: false,
            cardIndex: 0
        }
    }

    renderCard = card => {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>{card}</Text>
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
                        cardVerticalMargin={320}
                        marginTop={-100}
                        renderCard={this.renderCard}
                        onSwipedAll={this.onSwipedAllCards}
                        overlayLabels={overlayLabels}
                        animateOverlayLabelsOpacity
                        animateCardOpacity
                    >
                    </Swiper>
                </View>
                <View style={styles.container}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEFF'
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
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
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

export default App;