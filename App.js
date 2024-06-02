import React, {useEffect} from 'react'
import {StyleSheet, Text, View, Platform} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import StackNavigation from './navigation'

const App = () => {
  
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
