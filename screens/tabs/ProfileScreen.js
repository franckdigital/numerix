import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window')

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicRow}>
        <Image style={styles.profilePic} source={require('../../src/assets/images/photo_profile.png')}/>
        <Text style={styles.textProfile}>Franck Alain</Text>
        <Text style={{color: 'white', fontSize: 15, fontFamily: 'NunitoRegular'}}>+225 07 09 63 82 08</Text>
      </View>

      <View style={styles.profileInfoRow}>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#4c8ff8',
},
profilePicRow: {
  height: 250,
  marginTop: 30,
  alignItems: 'center',
  justifyContent: 'center'
},
profileInfoRow: {
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  marginTop: 30,
  height: height
},
profilePic: {
  borderRadius: 20,
  width: 200,
  height: 200
},
textProfile: {
  color: 'white',
  fontFamily: 'Nunito-SemiBold',
  fontSize: 20,
  marginTop: 10

}
})

export default ProfileScreen