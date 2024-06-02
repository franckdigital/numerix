import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const text = `Cliquer sur l'image ci-dessus${"\n"} pour téléverser votre ordonnance`

export const UserInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <Icon name="share-outline" size={25} color='#000' />
      <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}> {text} </Text>
        {/*
        <Text
          style={{
            color: 'gray',
            fontSize: 16,
          }}>
          youssouf@email.com
        </Text>
        */}
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '500',
  },
  infoContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: 'center',
  },
});
