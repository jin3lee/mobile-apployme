import React from 'react';
import { View, Text, TextInput,
    StyleSheet, Alert, Image,
    StatusBar, TouchableOpacity } from 'react-native';

// SVGs
import PurpleBlob from './../assets/purpleblob.js';
import CirclePageMarkOne from './../assets/circlePageMarkOne.js';
import UploadPicture from './../assets/uploadPicture.js';
import CameraIcon from './../assets/cameraIcon.js';
import EyeSlash from './../assets/eyeSlash.js';
import Underline from './../assets/underline.js';
import UnderlineShort from './../assets/underlineShort.js';
import UnderlineGreen from './../assets/underlineGreen.js';
import UnderlineGreenShort from './../assets/underlineGreenShort.js';
import ContinueButtonGray from './../assets/continueButtonGray.js';
import ContinueButtonPurple from './../assets/continueButtonPurple.js';

// STATE
import { connect } from 'react-redux';
import { PAGE_STATE_HOME } from './../redux/actionTypes.js';
import { actionUpdatePageState } from './../redux/actions.js';

// Photo picker
import * as ImagePicker from 'expo-image-picker';

// VALIDATOR
var validator = require("email-validator");
var passwordValidator = require('password-validator');
import parsePhoneNumber from 'libphonenumber-js';

// Firebase
import * as firebase from 'firebase';

//const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
 

    // console.log("email validator", validator.validate("test@email.com"));
    // console.log("password validator", schema.validate("hello234"));
    // const phoneNumber = parsePhoneNumber('534269441', 'US')
    // if ( phoneNumber ) {
    //     console.log( "phone#", phoneNumber.isValid() )
    // }

// Create a schema
var schema = new passwordValidator();
schema.is().min(8);     // Minimum length 1

class CreateAccountPage extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            firstName: ' ',
            lastName: ' ',
            phoneNumber: ' ',
            email: ' ',
            password: ' ',
            confirmPassword: ' ',
            portraitUri: null,
        };
        this._updatePageState = this._updatePageState.bind(this);
        this._continueCheckValidation = this._continueCheckValidation.bind(this);
        this._onContinuePress = this._onContinuePress.bind(this);
    }

    // navigate to different page
    _updatePageState( pageState ) {
        this.props.dispatch( actionUpdatePageState( pageState ) );
    }

    _continueCheckValidation() {
        let validFirstName = ( this.state.firstName && this.state.firstName.length > 1 );
        let validLastName = ( this.state.lastName && this.state.lastName.length > 1 );
        let validPhoneNumber = ( parsePhoneNumber(''+this.state.phoneNumber, 'US') && parsePhoneNumber(''+this.state.phoneNumber, 'US').isValid() );
        let validEmail = (validator.validate( this.state.email ));
        let validPassword = ( schema.validate( this.state.password ) );
        let validConfirmPassword = ( schema.validate( this.state.confirmPassword ) && this.state.confirmPassword === this.state.password );
        let validPortraitUri = (this.state.portraitUri && this.state.portraitUri !== null );

        return ( validFirstName 
            && validLastName 
            && validPhoneNumber 
            && validEmail 
            && validPassword 
            && validConfirmPassword
            && validPortraitUri);
    }

    _onContinuePress() {
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(
            (success)=>{ this._sendVerificationEmail(); }, 
            (error)=>{ Alert.alert(error.message); }
        );
    }

    _sendVerificationEmail() {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(
            ()=>{ console.log("email verification SUCCESS") },
            (error)=>{ console.log("email verification failed") }
        );
    }

    render() {

            console.log( 'continueCheck=', this._continueCheckValidation() );

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
                            <Text style={{ fontSize: 30, marginBottom: 10, marginTop: '10%', fontWeight: '700', color: 'white' }}>Create an Account</Text>
                            <CirclePageMarkOne />
                        </View>
                    </View>

                    <View style={ styles.signInContainer }>
                        <View style={ styles.outerBorderStyle }>
                            <View style={ styles.signInWhiteBoxContainer }>
                                <View style={ styles.signInContainerMarginLeft }>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            { ( this.state.portraitUri ) 
                                                ? <Image source={{ uri: this.state.portraitUri }} style={{ width: 87, height: 87, overflow: 'hidden', borderRadius: 105 / 2, }} /> 
                                                : <UploadPicture /> }
                                            <View style={{ justifyContent: 'flex-end', bottom: 10, right: 40 }}>
                                                <TouchableOpacity onPress={ async () => {
                                                    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                                                    if (status !== 'granted') {
                                                      alert('Sorry, we need camera roll permissions to make this work!');
                                                    } else {

                                                        let result = await ImagePicker.launchImageLibraryAsync({
                                                            mediaTypes: ImagePicker.MediaTypeOptions.All,
                                                            allowsEditing: true,
                                                            aspect: [4, 3],
                                                            quality: 1,
                                                        });

                                                        if (!result.cancelled) {
                                                            this.setState({ portraitUri: result.uri });
                                                        }
                                                    }
                                                }}>
                                                    <CameraIcon />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        
                                        <View style={{ justifyContent: 'space-around', right: 25 }}>
                                            <View>
                                                <View style={ styles.inputContainer }>
                                                    <TextInput maxLength={29} placeholder="First Name" style={{ color: 'black', padding: 5, width: '75%' }} 
                                                        onChangeText={ ( firstName ) => {
                                                            this.setState({ firstName: firstName });
                                                        }}
                                                    />
                                                </View>
                                                { ( this.state.firstName && this.state.firstName.length > 1 ) ? <UnderlineGreenShort /> : <UnderlineShort />  }
                                            </View>
                                            
                                            <View>
                                                <View style={ styles.inputContainer }>
                                                    <TextInput maxLength={29} placeholder="Last Name" style={{ color: 'black', padding: 5, width: '75%' }} 
                                                        onChangeText={ ( lastName ) => {
                                                            this.setState({ lastName: lastName });
                                                        }}
                                                    />
                                                </View>
                                                { ( this.state.lastName && this.state.lastName.length > 1 ) ? <UnderlineGreenShort /> : <UnderlineShort />  }
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height:'35%', display: 'flex', justifyContent: 'space-between'}}>
                                        <View style={ styles.lowerInputContainer }>
                                            <View style={ styles.inputContainer }>
                                                <TextInput dataDetectorTypes='phoneNumber' maxLength={29} placeholder="Phone Number" style={{ color: 'black', padding: 5, width: '75%' }} 
                                                    onChangeText={ ( phoneNumber ) => {
                                                        this.setState({ phoneNumber: phoneNumber });
                                                    }}
                                                />
                                            </View>
                                            { ( parsePhoneNumber(''+this.state.phoneNumber, 'US') && parsePhoneNumber(''+this.state.phoneNumber, 'US').isValid() ) ? <UnderlineGreenShort /> : <UnderlineShort />  }
                                        </View>
                                        
                                        <View style={ styles.lowerInputContainer }>
                                            <View style={ styles.inputContainer }>
                                                <TextInput maxLength={29} placeholder="Email" style={{ color: 'black', padding: 5, width: '75%' }} 
                                                    onChangeText={ ( email ) => {
                                                        this.setState({ email: email });
                                                    }}
                                                />
                                            </View>
                                            { (validator.validate( this.state.email )) ?  <UnderlineGreen /> : <Underline /> }
                                        </View>

                                        <View style={ styles.lowerInputContainer }>
                                            <View style={ styles.inputContainer }>
                                                <TextInput maxLength={29} placeholder="Password" secureTextEntry={ true } style={{ color: 'black', padding: 5, width: '75%' }} 
                                                    onChangeText={ ( password ) => {
                                                        this.setState({ password: password });
                                                    }}
                                                />
                                            </View>
                                            { ( schema.validate( this.state.password ) ) ?  <UnderlineGreen /> : <Underline /> }
                                            
                                        </View>

                                        <View style={ styles.lowerInputContainer }>
                                            <View style={ styles.inputContainer }>
                                                <TextInput maxLength={29} placeholder="Confirm Password" secureTextEntry={ true } style={{ color: 'black', padding: 5, width: '75%' }} 
                                                    onChangeText={ ( confirmPassword ) => {
                                                        this.setState({ confirmPassword: confirmPassword });
                                                    }}
                                                />
                                            </View>
                                            { ( schema.validate( this.state.confirmPassword ) && this.state.confirmPassword === this.state.password ) ?  <UnderlineGreen /> : <Underline /> }
                                        </View>

                                        <View style={ styles.lowerInputContainer }>
                                            <TouchableOpacity onPress={ this._onContinuePress } style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                                { ( this._continueCheckValidation() ) ? <ContinueButtonPurple /> : <ContinueButtonGray /> }
                                            </TouchableOpacity>
                                        </View>

                                        <View style={ styles.lowerInputContainer }>
                                            <TouchableOpacity >
                                                <Text style={{ fontSize: 14, fontWeight: '400', color: '#9E9E9E'}}>By signing up, you agree to apployMe's</Text>
                                                <Text style={{ fontSize: 14, fontWeight: '400', color: 'black'}}>Terms of Service & Privacy Policy</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
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
        marginTop: 30,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    lowerInputContainer: {
        marginTop: '5%'
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
      state: state,
    };
  };
  
export default connect( mapStateToProps )( CreateAccountPage );