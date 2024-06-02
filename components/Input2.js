import React from 'react';
import { View, Image, StyleSheet, Dimensions, TextInput } from 'react-native';

const {width, height} = Dimensions.get('window')

const Input2 = ({
    placeholder, icon, password, ...rest
}) => (
    <View style={styles.container}>
        <View style={styles.icon}>
            <Image source={icon}/>
        </View>
        <TextInput 
            secureTextEntry={password}
            placeholder={placeholder}
            placeholderTextColor="#000"
        ></TextInput>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: width -60,
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon: {
        paddingLeft: 5
    },
    
})

export default Input2;
