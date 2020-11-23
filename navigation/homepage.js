import React from 'react';
import { View, Text, TextInput,
    Button, StyleSheet, Alert,
    StatusBar } from 'react-native';

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
            <View>
                <StatusBar barStyle="dark-content" />
                <Text>Sign Up or Login ..</Text>
            </View>
        );
    }
}