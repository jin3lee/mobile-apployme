import React from 'react';
import { View, Text, TextInput,
    Button, StyleSheet, Alert,
    StatusBar, TouchableOpacity } from 'react-native';

// SVGs
import PurpleBlob from './../assets/purpleblob.js';
import CirclePageMarkOne from './../assets/circlePageMarkOne.js';
import Avatar from './../assets/avatar.js';
import Lock from './../assets/lock.js';
import Underline from './../assets/underline.js';
import ContinueButtonGray from './../assets/continueButtonGray.js';

// STATE
import { connect } from 'react-redux';
import { PAGE_STATE_HOME } from './../redux/actionTypes.js';
import { actionUpdatePageState } from './../redux/actions.js';

class CreateAccountPage extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            email: ' ',
            password: ' ',
        };
        this._updatePageState = this._updatePageState.bind(this);
    }

    // navigate to different page
    _updatePageState( pageState ) {
        this.props.dispatch( actionUpdatePageState( pageState ) );
    }

    render() {
        return (
            <View style={ styles.container }>
                <StatusBar barStyle="light-content" />
                <View style={ styles.background }>
                    <View style={ styles.blob }>
                        <PurpleBlob />
                    </View>
                </View>
                
                <View style={ styles.flexContainer }>
                    <View style={ styles.appLogoAndNameStyle }>
                        <View style={{ justifyContent: 'center'}}>
                            <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: '700', color: 'white' }}>Create an Account</Text>
                            <CirclePageMarkOne />
                        </View>
                    </View>

                    <View style={ styles.signInContainer }>
                        <View style={ styles.outerBorderStyle }>
                            <View style={ styles.signInWhiteBoxContainer }>
                                <View style={ styles.signInContainerMarginLeft }>
                                    
                                    <View style={ styles.inputContainer }>
                                        <View style={{ padding: 5 }}>
                                            <Avatar/>
                                        </View>
                                        <TextInput maxLength={29} placeholder="Email" style={{ color: 'black', padding: 5, width: '75%' }} 
                                            onChangeText={ ( email ) => {
                                                this.setState({ email: email });
                                            }}
                                        />
                                    </View>
                                    <Underline />

                                    <View style={ styles.inputContainer }>
                                        <View style={{ padding: 5 }}>
                                            <Lock/>
                                        </View>
                                        <TextInput maxLength={29} placeholder="Password" secureTextEntry={ true } style={{ color: 'black', padding: 5, width: '75%' }} 
                                            onChangeText={ ( password ) => {
                                                this.setState({ password: password });
                                            }}
                                        />
                                    </View>
                                    <Underline />


                                    <TouchableOpacity style={{ marginTop: 30, backgroundColor: '#1A152D', width: 161, height: 54, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <ContinueButtonGray />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ paddingTop: 22 }}>
                                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#9E9E9E'}}>By signing up, you agree to apployMe's</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '400', color: 'black'}}>Terms of Service & Privacy Policy</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>



                <View style={{
                        ...StyleSheet.absoluteFillObject,
                        position: 'absolute',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginBottom: '5%',
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5%', alignItems: 'center' }}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={ () => { this._updatePageState( PAGE_STATE_HOME ) } }>
                            <Text style={{ color: '#4a36a7', padding: 5 }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
    },
    blob: {
        marginTop: '-20%',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        top: -20,
    },
    appLogoAndNameStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignContent: 'center',
        marginLeft: '10%',
        marginBottom: '5%',
    },
    signInContainer: {
        display: 'flex',
        justifyContent: 'left',
    },
    signInWhiteBoxContainer: {
        display: 'flex',
        height: 460,
        width: 330,
        borderLeftWidth: 0,
        borderColor: 'rgba(255,255,255,.15)',
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
    },
    outerBorderStyle: {
        height: 487,
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
    inputContainer: {
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: '10%'
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
      state: state,
    };
  };
  
export default connect( mapStateToProps )( CreateAccountPage );