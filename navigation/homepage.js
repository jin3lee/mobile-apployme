import React from 'react';
import { View, Text, TextInput,
    Button, StyleSheet, Alert,
    StatusBar } from 'react-native';

import PurpleBlob from './../assets/purpleblob.js';
import ApployMeLogo from './../assets/apployMeLogo.js';

export default class HomePage extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            email: ' ',
            password: ' ',
            confirmPassword: ' ',
        };
    }

    render() {
        return (
            <View style={ styles.container }>
                <StatusBar barStyle="dark-content" />
                <View style={ styles.background }>
                    <View style={ styles.blob }>
                        <PurpleBlob />
                    </View>
                </View>
                
                <View style={ styles.flexContainer }>
                    <View style={ styles.appLogoAndNameStyle }>
                        <ApployMeLogo />
                        <View style={{ backgroundColor: 'green', justifyContent: 'center'}}>
                            <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: '300' }}>apployMe</Text>
                        </View>
                    </View>

                    <View style={ styles.signInContainer }>
                        <View style={ styles.outerBorderStyle }>
                            <View style={ styles.signInWhiteBoxContainer }>
                                <View style={ styles.signInContainerMarginLeft }>
                                    <Text style={{ fontSize: 40, fontWeight: '600' }}>Sign In</Text>
                                    <Text>Email</Text>
                                    <Text>Password</Text>
                                    <Text>Forgot Password</Text>
                                    <Text>Log In -></Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                <Text>Sign Up or Login ..</Text>
            </View>
        );
    }

}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(255, 255, 240)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
    },
    blob: {
        marginTop: '-40%',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        width: '100%',
    },
    appLogoAndNameStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'left',
        alignContent: 'center',
        marginLeft: '10%',
    },
    signInContainer: {
        display: 'flex',
        backgroundColor: 'pink',
        justifyContent: 'left',
    },
    signInWhiteBoxContainer: {
        display: 'flex',
        height: 387,
        width: 330,
        borderLeftWidth: 0,
        borderColor: 'rgba(255,255,255,.15)',
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
    },
    outerBorderStyle: {
        height: 419,
        width: 347,
        borderWidth: 0,
        borderLeftWidth: 0,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'rgba( 255, 255, 255, .15 )',
        borderColor: 'rgba( 255, 255, 255, .15 )',
        justifyContent: 'center'
    },
    signInContainerMarginLeft: {
        marginLeft: 30,
        marginTop: 56,
    },
};