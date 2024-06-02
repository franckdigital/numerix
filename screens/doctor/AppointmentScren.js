import { Text, View, StyleSheet, Dimensions, 
    Image, ImageBackground, TouchableOpacity, 
    PermissionsAndroid, SafeAreaView,  
    Platform, StatusBar
  } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import Input from '../../components/Input2'
import Button from '../../components/Button'
import BottomTab from '../../components/BottomTab'
import {ImageOrVideo} from 'react-native-image-crop-picker'
import { Avatar } from '../../components/Avatar'
import { UserInfo } from '../../components/UserInfo'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')
const tip = `Pour votre prise en charge médicale à domicile, ${"\n"}veuillez svp renseigner le formulaire de demande`
  
function AppointmentScren({ navigation }) {
  
return (
    <View style={styles.container}>
        <ImageBackground source={require('../../src/assets/images/doctor_appointment.png')} style={{width: width, height: height}}>
        <View style={styles.darkLayer}></View>
            <View style={{margin: 40}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-circle" size={32} color={"#fff"} />
              </TouchableOpacity>
            </View>
            <View style={styles.appointmentContainer}>
                <View style={styles.appointmentForm}>
                    <Text style={styles.tipText}>{tip}</Text>

                    <View style={styles.input}>
                        <Input icon={require('../../src/assets/images/user-icon.png')} placeholder='Noms et prénoms'/>
                            <View style={{paddingTop: 16}} />
                        <Input icon={require('../../src/assets/images/mobile-icon.png')} placeholder='N° téléphone'/>
                            <View style={{paddingTop: 16}} />
                        <Input icon={require('../../src/assets/images/mail-icon.png')} placeholder='Adresse Email'/>
                            <View style={{paddingTop: 16}} />
                        <Input icon={require('../../src/assets/images/location-icon.png')} placeholder="Adresse domicile"/>
                            <View style={{paddingTop: 16}} />
                        <Input icon={require('../../src/assets/images/pathology-icon.png')} placeholder='Pathologie' />
                            <View style={{paddingTop: 16}} />
                    </View>
                    <View style={{backfaceVisibility: 'white'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <View style={{marginTop: 5, justifyContent: 'center', alignItems: 'center',}}>
                                <Button text='Envoyer' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <BottomTab />
    </View>
)
  
}
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#fff',
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
appointmentContainer: {
    backgroundColor: '#e3e2e2',
    flex: 1,
    top: '20%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 100
},
  appointmentForm: {
    margin: 15,
},
input: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center'
},
tip: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
},
tipText: {
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
},
    }
)
  
  export default AppointmentScren