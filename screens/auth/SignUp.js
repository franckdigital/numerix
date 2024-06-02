import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Input from '../../components/Input'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import Button from '../../components/Button'
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get('window')

const title = 'Créez votre compte'
const tip = `Veuillez créer votre compte, ${"\n"}pour bénéficier des services de MEDEX`
const signin = 'Avez-vous déjà un compte ? Connectez-vous'

const SignUp = (
    { navigation }
) => (
    <View style={styles.container}>
        <ImageBackground source={require('../../src/assets/images/consultation.jpg')} style={{width: width, height: height}}>
            {/*<View style={styles.darkLayer}></View>*/}
            <LinearGradient colors={['#00000000', '#000000']} style={{height : '100%', width : '100%'}}>
            <View style={styles.logo}>
                <Image source={require('../../src/assets/images/logo.png')} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
            </View>
            <View style={styles.tip}>
                <Text style={styles.tipText}>{tip}</Text>
            </View>

            <View style={styles.input}>
                <Input icon={require('../../src/assets/images/user-icon.png')} placeholder='Noms et prénoms'/>
                <View style={{paddingTop: 16}} />
                <Input icon={require('../../src/assets/images/mobile-icon.png')} placeholder='Numéro de téléphone'/>
                <View style={{paddingTop: 16}} />
                <Input icon={require('../../src/assets/images/mail-icon.png')} placeholder='Adresse Email'/>
                <View style={{paddingTop: 16}} />
                <Input icon={require('../../src/assets/images/location-icon.png')} placeholder=" Lieu d'habitation"/>
                <View style={{paddingTop: 16}} />
                <Input icon={require('../../src/assets/images/lock-icon.png')} placeholder='Mot de passe' password/>
                <View style={{paddingTop: 16}} />
                <Input icon={require('../../src/assets/images/lock-icon.png')} placeholder='Confirmer mot de passe' password/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>

            <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Button text='Créez votre compte' />
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.signin}>
                    <Text style={styles.signinText}>{signin}</Text>
                </View>
            </TouchableOpacity>
            </LinearGradient>
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
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: '#fff',
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 30
    },
    tip: {
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tipText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18,
    },
    input: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signin: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    signinText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14
    },
})

export default SignUp;
