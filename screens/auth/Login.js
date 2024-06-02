import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Input from '../../components/Input'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import Button from '../../components/Button'
import LinearGradient from 'react-native-linear-gradient'

const {width, height} = Dimensions.get('window')

const title = 'Bienvenue'
const tip = `Connectez-vous, ${"\n"}pour bénéficier des services de MEDEX`
const signup = 'Nouvel utilisateur ? Créer un compte'
const terms = "En créant votre compte vous êtes d'accord avec les terms et conditions d'utilisation"

const Login = (
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
                <Input icon={require('../../src/assets/images/mobile-icon.png')} placeholder='Numéro de téléphone' />
                <View style={{paddingTop: 16}} />
                <Input icon={require('../../src/assets/images/lock-icon.png')} placeholder='Mot de passe' password/>
            </View>
            <View style={styles.remember}>
                <View>
                    <RadioGroup size={16} thickness={2} color={'#fff'}>
                        <RadioButton color='#fff' value={''}>
                            <Text style={styles.rememberText}>Se souvenir</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                    <View>
                        <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={{marginTop: 37, justifyContent: 'center', alignItems: 'center'}}>
                    <Button text='Connectez-vous' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <View style={styles.signup}>
                    <Text style={styles.signupText}>{signup}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.terms}>
                <Text style={styles.termsText}>{terms}</Text>
            </View>
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
