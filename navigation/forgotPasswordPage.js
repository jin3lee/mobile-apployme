import React from 'react';
import { View, Text, Button, TextInput, Alert,
    StatusBar, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { PAGE_STATE_HOME } from './../redux/actionTypes.js';
import { actionUpdatePageState } from './../redux/actions.js';

// SVGs
import ForgotPasswordUbuntuText from './../assets/svgs/forgotPasswordUbuntuText.js';
import BackButtonForgotPassword from './../assets/svgs/backButtonForgotPassword.js';
import Underline from './../assets/svgs/underline.js';
import UnderlineGreen from './../assets/svgs/underlineGreen.js';
import ContinueButtonGray from './../assets/svgs/continueButtonGray.js';
import ContinueButtonLightPurple from './../assets/svgs/continueButtonLightPurple.js';


// VALIDATOR
var validator = require("email-validator");

// Firebase
import * as firebase from 'firebase';

class ForgotPasswordPage extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isEmailValid: false,
        }

        this._goBackPress = this._goBackPress.bind(this);

        this._sendResetPasswordEmailPress = this._sendResetPasswordEmailPress.bind(this);
    }

    _goBackPress() {
        this.props.dispatch( actionUpdatePageState(PAGE_STATE_HOME) );
    }

    _sendResetPasswordEmailPress() {
        if( this.state.isEmailValid ) {
            var auth = firebase.auth();
            auth.sendPasswordResetEmail(this.state.email).then(
                ()=>{ Alert.alert("Reset Email has been sent to " + this.state.email);},
                (error)=>{ Alert.alert(error.message);}
            );
        }
    }

    render() {
        return (
            <View style={{ display: 'flex', height: '100%' }}>
                <View style={{ display: 'flex', width:'80%', alignItems: 'left', marginLeft: '7%', marginTop: 84 }}>
                    <StatusBar barStyle="dark-content" />
                    <TouchableOpacity onPress={ this._goBackPress }>
                        <BackButtonForgotPassword />
                    </TouchableOpacity>
                    
                    <View style={{ marginTop: 122 }} />
                    <ForgotPasswordUbuntuText />
                    
                    <Text style={{ fontWeight: '400', marginTop: 18 }}>Please enter the phone or email address associated with your account.</Text>
                    
                    <View style={{ marginTop: 70 }} />
                    <TextInput
                        style={{ padding:10, marginBottom: 3, width:'100%', fontWeight: '700', fontSize: 18 }} 
                        placeholder="Enter Email" 
                        keyboardType="email-address"
                        onChangeText={( email ) => {
                            this.setState({ 
                                email: email,
                                isEmailValid: validator.validate( this.state.email ),                 
                            });
                        }} 
                    />
                    <View style={{ backgroundColor: 'gray', width: '100%', height: 2}} />
                    
                    <View style={{ marginTop: 50 }} />
                    <TouchableOpacity onPress={ this._sendResetPasswordEmailPress }>
                    { ( this.state.isEmailValid ) ? <ContinueButtonLightPurple /> : <ContinueButtonGray /> }
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      state: state,
    };
  };
export default connect( mapStateToProps )( ForgotPasswordPage );