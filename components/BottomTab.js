import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import IMAGES from '../src/assets/images'
import COLORS from '../src/constants/colors'
import { useNavigation } from "@react-navigation/native"

function BottomTab({ activeScreen }) {
const navigation = useNavigation()
  return (
    <View style={styles.tabContainer}>
        <View style={styles.tabIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>

                <View style={styles.icons}>
                    <Image source={(IMAGES.HOME)} 
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: activeScreen ? COLORS.BLUE_LIGHT : COLORS.WHITE,
                        }}/>
                    <Text style={styles.textTabIcons}>Accueil</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Video")}>
                <View style={styles.icons}>
                    <Image source={(IMAGES.VIDEO)} 
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: activeScreen ? COLORS.BLUE_LIGHT : COLORS.WHITE,
                        }}/>
                    <Text style={styles.textTabIcons}>Consultation</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <View style={styles.icons}>
                    <Image source={(IMAGES.PROFILE)} 
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: activeScreen ? COLORS.BLUE_LIGHT : COLORS.WHITE,
                        }}/>
                    <Text style={styles.textTabIcons}>Compte</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Aide")}>
                <View style={styles.icons}>
                    <Image source={(IMAGES.HELP)} 
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: activeScreen ? COLORS.BLUE_LIGHT : COLORS.WHITE,
                        }}/>
                    <Text style={styles.textTabIcons}>Aide</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    tabContainer: {
      width: '90%',
      borderRadius: 12,
      left: '5%',
      bottom: 80,
      backgroundColor: COLORS.BLUE,
      height: 60,

    },
    label: {
      textTransform: 'capitalize',
      fontSize: 12,
    },
    tabIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    icons: {
        alignItems: 'center',
        padding: 10,
      },
    textTabIcons: {
        color: 'white',
    }
  })

export default BottomTab