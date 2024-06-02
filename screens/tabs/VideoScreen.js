import {View, Text, StyleSheet, Dimensions, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FONTS } from '../../src/constants'
import Button from '../../components/Button'

const {width, height} = Dimensions.get('window')

const VideoScreen = ({navigation}) => {

  const [swithValue, setSwithValue] = useState(false)

  const toggleSwitch = (value) => {
    setSwithValue(value)
  }
  return (
    <View style={styles.container}>
      <View style={styles.doctorCard}>
        <View style={styles.doctorItems}>
            <View>
              <Image style={styles.doctorPic} source={require('../../src/assets/images/doctor_row.png')}/>
            </View>
            <View>
              <Image style={styles.videoPic} source={require('../../src/assets/images/video_call_pic.png')}/>
            </View>
        </View>

        
        <View style={styles.textItemsCard}>
          <Text style={styles.textItems}><Icon name="bag-add-outline" size={21} color="#fff" /> Qualité</Text>
          <Text style={styles.textItems}>
            <View style={{backgroundColor: 'white', borderRadius: 4}}>
              <Icon name="medal-outline" size={21} color="red" />
            </View> Expérience</Text>
          <Text style={styles.textItems}><Icon name="document-lock-outline" size={21} color="#fff" /> Confidentialité</Text>
        </View>
      </View>

      <View style={styles.termsCard}><Text style={styles.terms}>Termes de prestations de services</Text></View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>

      <View style={styles.contentSwitch}>
        
        <Switch 
          value={swithValue}
          onValueChange={toggleSwitch}
        />
        <Text style={styles.textSwitch}>
          {swithValue ? `J'accèpte les termes de services`: 'En cliquant sur ce bouton vous acceptez les termes de prestations de services'}
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button text='Consulter Médecin' />
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'white',
  },
  doctorCard:{
    height: 250,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: '#0857de',
  },
  doctorItems: {
    height: 150,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  doctorPic: {
    height: 150,
    width: 150,
    borderRadius: 10,
    margin: 7,
  },
  videoPic: {
    height: 120,
    width: 90,
    alignItems: 'center',
  },
  textItemsCard: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textItems: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },
  scrollView: {
    marginTop: 10,
    marginHorizontal: 20,
    minHeight: 200, maxHeight: 220
  },
  text: {
    fontSize: 16,
    fontFamily: 'NunitoRegular',
    textAlign: 'justify'
  },
  termsCard: {
    marginLeft: 20,
    marginTop: 15
  },
  terms: {
    color: '#5a595c',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20
  },
  contentSwitch: {
    flexDirection: 'row',
    margin: 20
  },
  textSwitch:{
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Nunito-ExtraBold',
    marginRight: 40
  }
})

export default VideoScreen