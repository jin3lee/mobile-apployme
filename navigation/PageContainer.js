import React from "react";

import { connect } from 'react-redux';
import { View, Text } from "react-native";

import HomePage from "./homepage.js";
import CreateAccountPage from "./createAccountPage.js";
import DashBoard from "./dashboard.js";

import { PAGE_STATE_HOME, PAGE_STATE_SIGN_UP } from './../redux/actionTypes.js';

class PageContainer extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      pageState: null,
    }
    this._getPageBasedOnState = this._getPageBasedOnState.bind(this);
  }

  componentDidMount() {
    // set the default screen state
    this.setState( { pageState: this.props.pageState } );
  }

  _getPageBasedOnState() {
    let pageState = this.state.pageState;
    if( this.props.pageState ) {
        pageState = this.props.pageState;
    }

    switch( pageState ) {
      case PAGE_STATE_SIGN_UP:
        return <CreateAccountPage />;
      case PAGE_STATE_HOME:
        return <HomePage />;
      default:
        return <HomePage />;
    }
  }

  render() {
    return(
      <View style={ styles.container }>
        { this._getPageBasedOnState() }
      </View>
    );
  }
}

const styles = {
  container: {
    width: '100%',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    pageState: state.reducer.pageState,
  };
};

export default connect( mapStateToProps )( PageContainer );








// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// // navigation
// import Dashboard from './navigation/dashboard';
// import HomePage from './navigation/homepage';
// import * as firebase from 'firebase';
// import apiKeys from './config/keys';

// // state management
// import { Provider } from 'react-redux'

// export default class App extends React.Component {

//   constructor( props ) {
//     super(props);
//     this.state = {
//       isLoaded: true,
//       isAuthenticationReady: false,
//       isAuthenticated: false,
//     }

//     // load firebase
//     if( !firebase.apps.length ) {
//       firebase.initializeApp( apiKeys.firebaseConfig );
//       firebase.auth().onAuthStateChanged(( user ) => {
//         this.setState({ isAuthenticatedReady: true });
//         this.setState({ isAuthenticated: !!user });
//       });
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         { (this.state.isAuthenticated) ? <Dashboard /> : <HomePage /> }
//       </View>
//     );
//   } 
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
