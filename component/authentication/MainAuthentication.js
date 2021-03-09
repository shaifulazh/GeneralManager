import React from 'react'
import { View, Text, Button, Platform } from 'react-native'
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

export default function MainComponent() {

    if(Platform.OS === 'android')
    {
        GoogleSignin.configure(
            {
                webClientId : '887300145536-1bt9rt28jet8fimdpigbfscncrfv9bfj.apps.googleusercontent.com'
            }
            );
    }

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const {idToken } = await GoogleSignin.signIn();

          const googleCredential = auth.GoogleAuthProvider.credential(idToken );
          auth().signInWithCredential(googleCredential);

        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };




    const anonymous = (params) => {
    
        auth()
          .signInAnonymously()
          .then(() => {
            console.log('User signed in anonymously');
          })
          .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
              console.log('Enable anonymous in your firebase console.');
            }
    
            console.error(error);
          });
      }
    return (
        <View style={{flex:1, justifyContent : 'center', alignItems : 'center'}}>
        <Text>Login</Text>
        <Button title="Login Anom" onPress={anonymous}/>
        <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            disabled={false} />
      </View>
    )
}
