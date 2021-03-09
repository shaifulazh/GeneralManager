import React from 'react'
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function MainComponent() {
    const  logOutUser = (params) => {
        auth()
      .signOut()
      .then(() => console.log('User signed out!'));
      }
    return (
        <View style={{flex:1, justifyContent : 'center', alignItems : 'center'}}>
            <Text>Hello</Text>
            <Button title="logout" onPress={logOutUser}/>
        </View>
    )
}
