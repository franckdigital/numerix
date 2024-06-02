import {View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

const {width, height} = Dimensions.get('window')
const name = 'Bonjour, Franck Alain'
const welcome = 'Bienvenue'
const demander = `Demander ${"\n"}une consultation médicale ${"\n"}à domicile !`
const commander = `Commander ${"\n"} vos médicaments`

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.profile}>
            <View style={styles.profilePic}>
              <Image 
                source={require('../../src/assets/images/photo_profile.png')}
                style={styles.pic}
              />          
          </View> 
        </View>
        <View style={styles.profileMorning}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.welcome}>{welcome}</Text>
          </View>
      </View>

      <View style={styles.specialityRow}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Spécialités</Text>
        <View style={styles.specialities}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../src/assets/images/heart.png')} style={{width: 60, height: 50}}/>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cardiologie</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../src/assets/images/medecine_generale.png')} style={{width: 60, height: 50}}/>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Médecine Générale</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../src/assets/images/baby.png')} style={{width: 60, height: 50}}/>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pédiatrie</Text>
          </View>
          
        </View>
      </View>

      <View style={styles.doctorRow}>
        <View style={styles.doctorTopItemRow}>
          <View><Image source={require('../../src/assets/images/doctor_row.png')} style={{width: 80, height: 80, borderRadius: 10}}/></View>
            <TouchableOpacity onPress={() => navigation.navigate('Consultation')}>
              <View>
                <Text style={{fontSize: 20, color: 'white',  marginLeft: 5, marginTop: 2}}>{demander}</Text>
                  <View style={{alignItems: 'center', marginRight: 60, marginTop: 7}}>
                  <Icon name="arrow-forward-circle" size={35} color={"#fff"} />
                    </View>
              </View>
            </TouchableOpacity>
          <View></View>
        </View>

        <View style={styles.doctorBottomItemRow}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 90}}>
              <View>
                <Image source={require('../../src/assets/images/calendar.png')} style={{width: 30, height: 27, borderRadius: 10, }}/>
              </View>

              <View style={{marginLeft: 10, marginRight: 5 }}>
                <Text style={{color:'white'}}>7J/7</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 90}}>
              <View>
                <Image source={require('../../src/assets/images/timer.png')} style={{width: 30, height: 27, borderRadius: 10, }}/>
              </View>

              <View style={{marginLeft: 10, }}>
                <Text style={{color:'white'}}>24H/24</Text>
              </View>
            </View>

        </View>
      </View>

      <View style={styles.pharmacyRow}>
          <View style={styles.pharmacyItemRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Recherche')}>
              <ImageBackground imageStyle={{ borderRadius: 10}} style={styles.theImage} source={require('../../src/assets/images/order_pharmacy.png')}> 
                <LinearGradient colors={['#00000000', '#000000']} style={{height : '100%', width : '100%', borderRadius: 10}}>
                  <Text style={styles.commander_medicament}>{commander}</Text>
                  <View style={{marginLeft: 80, marginRight: 80, alignItems: 'center'}}>
                    <Icon name="log-in" size={35} color='#fff' />
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          </View>
      </View>

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
  topContainer: {
    backgroundColor: '#0857de',
    height: 210,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  profilePic: {
    marginTop: 30,
    marginRight: 30
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 10,
    
  },
  profileMorning: {
    marginTop: 10,
    marginLeft: 30,
    alignItems: 'flex-start'
  },
  name: {
    color: 'white',
    fontSize: 18,
  },
  welcome: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Nunito-SemiBold',
    fontWeight: 'bold'
  },
  specialityRow: {
    margin: 30
  },
  specialities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    height: 60
  },
  doctorRow: {
    margin: 10,
    backgroundColor: '#01179b',
    height: '20%',
    borderRadius: 10
  },
  doctorTopItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    height: 90,
  },
  doctorBottomItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    height: 38,
    bottom: 20,
    backgroundColor: '#a993ea',
    opacity: 0.8,
    borderRadius: 10
  },
  pharmacyRow: {
    margin: 10,
    backgroundColor: '#a993ea',
    borderRadius: 10,
    height: '30%'

  },
  pharmacyItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commander_medicament: {
    color: 'white',
    marginTop: 20,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    width: width-21
    
  },
  theImage: {
    width: "100%",
    borderRadius: 10
}

})

export default HomeScreen