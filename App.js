import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import Dashboard from './navigation/dashboard';
import HomePage from './navigation/homepage';

export default class App extends React.Component {

  constructor( props ) {
    super(props);
    this.state = {
      isLoaded: true,
      isAuthenticationReady: false,
      isAuthenticated: false,
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
