import React from 'react';
import { View, Text, Button } from 'react-native';


// Firebase
import * as firebase from 'firebase';

export default class Dashboard extends React.Component{
    render() {
        return (
            <View style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                <Text>You are logged In..</Text>
                <Button title="Log Out" onPress={ ()=>{ firebase.auth().signOut() } }></Button>
            </View>
        );
    }
}