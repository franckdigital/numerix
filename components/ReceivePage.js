import React, { useState } from 'react'
import { StyleSheet, Text , TextInput, View, Button} from 'react-native'

function ReceivePage({navigation}) {
    const [name, setName] = useState('')
    const [callId, setCallId] = useState('')

  return (
    <View style={styles.container}>
        <TextInput 
        style={styles.input} 
        placeholder='Enter your name'
        onChangeText={e => setName(e)}
        />

        <TextInput 
        style={styles.input} 
        placeholder='Enter your Number'
        onChangeText={e => setCallId(e)}
        />

        <Button 
        title='Join Call' 
        onPress={() => {
            navigation.navigate('Call', {data:name, id:callId})
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 40,
        margin: 10
    }
})

export default ReceivePage