import { Text, View, StyleSheet, Dimensions, 
  Image, ImageBackground, TouchableOpacity, 
  PermissionsAndroid, SafeAreaView,  
  Platform, StatusBar
} from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import Input from '../../components/Input'
import Button from '../../components/Button'
import BottomTab from '../../components/BottomTab'
import {ImageOrVideo} from 'react-native-image-crop-picker'
import { Avatar } from '../../components/Avatar'
import { UserInfo } from '../../components/UserInfo'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

const K_OPTIONS = [
  {
    item: 'Paracetamol',
    id: 'PARA',
  },
  {
    item: 'Ibex',
    id: 'IBE',
  },
  {
    item: 'Litacold',
    id: 'LI',
  },
  {
    item: 'Doliprane',
    id: 'DOL',
  },
  {
    item: 'Siprodenk',
    id: 'SIP',
  },
  {
    item: 'Curam',
    id: 'CUR',
  },
  {
    item: 'Serum Anti D',
    id: 'SAD',
  },
  {
    item: 'Rabetok',
    id: 'RAB',
  },
  {
    item: 'Bisoprolol',
    id: 'BIS',
  },
  {
    item: 'Fludex',
    id: 'FLU',
  },
  {
    item: 'Natrixam',
    id: 'NAT',
  },
]



function SearchPharmacyScreen({ navigation }) {

  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])

  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
  }
  

 return (
      <View style={styles.container}>
        <ImageBackground source={require('../../src/assets/images/pharmacy_sellers.jpg')} style={{width: width, height: height}}>
          <View style={styles.darkLayer}></View>
            <View style={{margin: 20}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-circle" size={32} color={"#fff"} />
              </TouchableOpacity>
            </View>
              <View style={styles.searchBody}>
              <View style={{ marginTop: 30, marginLeft: 40, marginRight: 40 }}>              
                <View style={{ height: 10, alignItems: 'center' }} />
                  <Text style={{ fontSize: 23, paddingBottom: 10 }}>Sélectionnez vos médicaments</Text>
                  <SelectBox
                    label="Selection multiple"
                    options={K_OPTIONS}
                    selectedValues={selectedTeams}
                    onMultiSelect={onMultiChange()}
                    onTapClose={onMultiChange()}
                    isMulti
                  />
                  
                </View>
                {/*Formulaire upload photo*/}
                <View style={styles.scroll}>
                    <StatusBar barStyle="dark-content" />
                    <View style={styles.userRow}>
                      <Avatar
                        onChange={onAvatarChange}
                        source={require('../../src/assets/images/photo-camera.png')}
                      />
                      <UserInfo />
                    </View>
                    <View style={styles.content} />
                  </View>
                
                {/**/}

                <TouchableOpacity onPress={() => navigation.navigate('Panier')}>
                  <View style={{marginTop: 5, justifyContent: 'center', alignItems: 'center'}}>
                      <Button text='Ajouter au panier' />
                  </View>
                </TouchableOpacity>
                
            </View>

        </ImageBackground>
        <BottomTab />
      </View>
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#4c8ff8',
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
  searchBody: {
    marginTop: 100,
    backgroundColor: 'white',
    height: height,
    width: width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  img: {
    width: '90%',
    height: 200,
    alignSelf: 'center'
  },
  btnCam: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'blue'
  },
  textBtn: {
    color: 'white'
  },
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    padding: 5,
    marginTop: 15,
  },
  content: {
    flex: 1,
    backgroundColor: '#d8d8db',
  },
})

export default SearchPharmacyScreen