import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native'
import Input from '../../components/Input'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import Button from '../../components/Button'


const {width, height} = Dimensions.get('window')

const title = 'Code OTP'
const tip = "Un message avec un code à 4 chiffre,"
const tip2 = ' vous a été envoyé sur votre numéro mobile xxx xxx xx08'

const Login = ({
    params,
}) => (
    <View style={styles.container}>
        <ImageBackground source={require('../src/assets/images/consultation.jpg')} style={{width: width, height: height}}>
            <View style={styles.darkLayer}></View>
            <View style={styles.logo}>
                <Image source={require('../src/assets/images/logo.png')} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
            </View>
            <View style={styles.tip}>
                <Text style={styles.tipText}>{tip}</Text>
                <Text style={styles.tipText}>{tip2}</Text>
            </View>

            <View style={styles.input}>
                <Input icon={require('../src/assets/images/mobile-icon.png')} placeholder='Mobile number' password/>
            </View>

            <View style={{marginTop: 37, justifyContent: 'center', alignItems: 'center'}}>
                <Button text='Confirmer' />
            </View>
            
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    darkLayer: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#000',
        opacity: 0.4
        
    },
    logo: {
        width: width,
        position: 'absolute',
        marginTop: 85,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginTop: 230,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: '#fff',
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 30
    },
    tip: {
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tip2: {
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tipText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18,
        textAlign: 'center'
    },
    input: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    remember: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.8
    },
    rememberText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12
    },
    forgotText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12
    },
    signup: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    signupText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14
    },
    terms: {
        marginTop: 40,
        marginRight: 80,
        marginLeft: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    termsText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 10,
        textAlign: 'center'
    }
})

export default Login;
