import React, { useState } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  StyleSheet,
  UIManager,
  Platform,
  Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const {width, height} = Dimensions.get('window')
const helpText = `Besoin ${"\n"}d'assistance ?`


const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  return (
    <>
      <TouchableOpacity onPress={toggleOpen} style={styles.heading} activeOpacity={0.6}>
        {title}
        <Icon name={isOpen ? "chevron-up-outline" : "chevron-down-outline"} size={18} color="black" />
      </TouchableOpacity>
      <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
        {children}
      </View>
    </>
  );
};

const HelpScreen = () => {
  const title=(
    <View>
    <Text style={styles.sectionTitle} >Je veux faire une consultation médicale</Text>
    </View>
  )

  const title2=(
    <View>
    <Text style={styles.sectionTitle} >Je veux me faire livrer mes médicaments</Text>
    </View>
  )

  const title3=(
    <View>
    <Text style={styles.sectionTitle} >Je veux suivre le parcours de ma livraison</Text>
    </View>
  )

  const body = (
    <View>
      <Text style={styles.sectionDescription} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  )

  const body2 = (
    <View>
      <Text style={styles.sectionDescription} >Address, Contact</Text>
    </View>
  )

  const body3 = (
    <View>
      <Text style={styles.sectionDescription} >Address, Contact</Text>
    </View>
  )
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
       
       <View style={styles.helpHeader}>
        <Text style={{fontSize: 30, marginTop: 90, marginLeft: 20, color: 'white'}}>{helpText}</Text>
        <Text style={{fontSize: 16, marginLeft: 20, color: 'white'}}>+225 27 22 00 00 01</Text>
       </View>

        <View style={styles.helpTitle}> 

        <Text style={styles.text}>Notre service d'assistance est disponible 24/7</Text>
        <Accordion title={title} >
          {body}
        </Accordion>
        <View style={{alignItems: 'center'}} ><View style={styles.divider} /></View>
        <Accordion title={title2} >
          {body2}
        </Accordion>
        <View style={{alignItems: 'center'}} ><View style={styles.divider} /></View>
        <Accordion title={title3} >
          {body3}
        </Accordion>
        <View style={{alignItems: 'center'}} ><View style={styles.divider} /></View>

        </View>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HelpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
  safeArea: {
    flex: 1,
  },
  heading: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden'
  },
  sectionTitle: {
    fontSize: 17,
    height: 30,
    marginLeft: '5%',
    fontWeight: 'bold'
  },
  sectionDescription: {
    fontSize: 18,
    height: 150,
    marginLeft: '5%',
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
  },
  helpTitle: {
    height: height,
    margin: 20
  },
  helpHeader: {
    height: 200,
    backgroundColor: '#0857de',
    borderBottomRightRadius: 100,
  }
});

