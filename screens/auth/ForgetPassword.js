import React, {Component} from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {useNavigation} from '@react-navigation/native'
import {Alert} from 'react-native-alert-dialogues'
import LinearGradient from 'react-native-linear-gradient'


const {width, height} = Dimensions.get('window')

const title = 'Mot de passe oublié'
const tip = "Entrez l'e-mail avec lequel vous vous êtes inscrit pour réinitialiser votre mot de passe"

export default ForgetPassword = ({navigation}) => {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('../../src/assets/images/forget_password.jpg')} style={{width: width, height: height}}>
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
                <Input icon={require('../../src/assets/images/mail-icon.png')} placeholder='Adresse email' password/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
                <View style={{marginTop: 37, justifyContent: 'center', alignItems: 'center'}}>
                    <Button text='Envoyer' />
                </View>
            </TouchableOpacity>
    
            </LinearGradient>
        </ImageBackground>
    </View>
)
}

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
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
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
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    successButton: {
        width: width -200,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#153e90'
      },
      titleButton: {
        color: 'white',
        fontSize: 18,
      },
})

