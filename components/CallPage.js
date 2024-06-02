import React from 'react'
import { Text, View } from 'react-native'
import {
    ZegoUIKitPrebuiltCall, 
    ONE_ON_ONE_VIDEO_CALL_CONFIG,  
    GROUP_VIDEO_CALL_CONFIG
} from '@zegocloud/zego-uikit-prebuilt-call-rn'
import KeyCenter from './KeyCenter'

function CallPage(props) {
    console.log(props.route.params)
    const name = props.route.params.data
    const id = props.route.params.id
  return (
    <View>
        <ZegoUIKitPrebuiltCall
            appID={KeyCenter.appID}
            appSign={KeyCenter.appSign}
            userID={name} // userID can be something like a phone number or the user id on your own user system. 
            userName={name}
            callID={id} // callID can be any unique string. 

            config={{
                // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                //...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                ...GROUP_VIDEO_CALL_CONFIG,
                // onOnlySelfInRoom: () => { props.navigation.navigate('Receive') },
                onHangUp: () => { props.navigation.navigate('Receive') },
            }}
        />
    </View>
  )
}

export default CallPage