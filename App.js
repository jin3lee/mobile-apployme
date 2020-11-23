import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import Dashboard from './navigation/dashboard';
import HomePage from './navigation/homepage';
import * as firebase from 'firebase';
import apiKeys from './config/keys';

export default class App extends React.Component {

  constructor( props ) {
    super(props);
    this.state = {
      isLoaded: true,
      isAuthenticationReady: false,
      isAuthenticated: false,
    }

    // load firebase
    if( !firebase.apps.length ) {
      firebase.initializeApp( apiKeys.firebaseConfig );
      firebase.auth().onAuthStateChanged(( user ) => {
        this.setState({ isAuthenticatedReady: true });
        this.setState({ isAuthenticated: !!user });
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { (this.state.isAuthenticated) ? <Dashboard /> : <HomePage /> }
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
