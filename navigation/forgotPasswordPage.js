import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

import { connect } from 'react-redux';
import { PAGE_STATE_HOME } from './../redux/actionTypes.js';
import { actionUpdatePageState } from './../redux/actions.js';

// Firebase
import * as firebase from 'firebase';

class ForgotPasswordPage extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }

        this._goBackPress = this._goBackPress.bind(this);

        this._sendResetPasswordEmailPress = this._sendResetPasswordEmailPress.bind(this);
    }

    _goBackPress() {
        this.props.dispatch( actionUpdatePageState(PAGE_STATE_HOME) );
    }

    _sendResetPasswordEmailPress() {
        if(this.state.email && this.state.email.length > 1){
            var auth = firebase.auth();
            auth.sendPasswordResetEmail(this.state.email).then(
                ()=>{Alert.alert("Sent Email!!!");},
                (error)=>{ Alert.alert(error.message);}
            );
        }
    }

    render() {
        return (
            <View style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                <Text>Enter your email to reset your password</Text>
                <TextInput
                    style={{ margin: 15, padding:5, width:'40%', backgroundColor: 'rgba(0, 0, 0, .05)' }} 
                    placeholder="email" 
                    onChangeText={( email ) => {
                        this.setState({ email: email });
                    }} 
                />
                <Button onPress={ this._sendResetPasswordEmailPress } title="Send Reset Password Email" />
                <Button onPress={ this._goBackPress } title="<-Back" />
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