import { View, Text, StyleSheet, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import Button from '../components/Button'
import LinearGradient from 'react-native-linear-gradient'

const {width, height} = Dimensions.get('window')

export default function Onbording({ navigation }) {


    const slides = [
        {id: 1, image: require('../src/assets/images/doctor.jpg')},
        {id: 2, image: require('../src/assets/images/order_pharmacy.jpg')},
        {id: 3, image: require('../src/assets/images/delivery_onboarding.jpg')},
    ]

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
                <Swiper autoplay={true}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activeDot} />}
                >
                        {slides.map( (slide) => {
                            return (
                                <View key={slide.id} style={styles.slide}>
                                    <Image source={slide.image} style={styles.image}/>
                                </View>
                            )
                        })}

                </Swiper>
            <View style={styles.darkLayer}></View>
                <View style={styles.logoContainer}>
                    <Image source={require('../src/assets/images/logo.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Demander une consultation</Text>
                </View>

                <View style={styles.textMedicament}>
                    <Text style={styles.text}>Commander des médicaments</Text>
                </View>

                <View style={styles.textLivraison}>
                    <Text style={styles.text}>Faites-vous livrer !</Text>
                </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.button}>
                    <Button text="C'est parti" />
                </View>
            </TouchableOpacity>
        </View>
  )
    
}

const styles = StyleSheet.create({
    container: {
        flex:  1,
    },
    slide:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width,
        height: height
    },
    dot: {
        backgroundColor: 'rgba(255, 255, 2555, 0.3)',
        width: 8,
        height: 8,
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 3
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 3
    },
    logoContainer: {
        width: width,
        position: 'absolute',
        top: 420,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        width: 300,
        position: 'absolute',
        bottom: 250,
        left: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 12
    },
    textMedicament: {
        width: 400,
        position: 'absolute',
        bottom: 210,
        left: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 12
    },
    textLivraison: {
        width: 400,
        position: 'absolute',
        bottom: 175,
        left: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 12
    },
    text: {
        fontFamily: 'Nunito-Bold',
        color: '#fff',
        fontSize: 24,
        fontWeight: '600'
    },
    button: {
        width: width,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 81
    },
    darkLayer: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#000',
        opacity: 0.7
        
    },
})