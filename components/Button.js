import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const Button = ({
    text, ...params
}) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: width -200,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#153e90'
    },
    text: {
        fontFamily: 'CircularStdBold',
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default Button;
