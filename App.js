
import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential}  from "firebase/auth";
import { auth } from './firebaseConfig';

WebBrowser.maybeCompleteAuthSession();


export default function App() {

  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:"182947276628-c9u5lhj19711l4a20uefhpja762clk29.apps.googleusercontent.com" ,
  });


    React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      const credential = GoogleAuthProvider.credential(authentication);
      signInWithCredential(auth, credential);
      console.log(response);
    }
  }, [response]);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  


  return (

    <>
    <LoginScreen promptAsync={promptAsync} />
    </>
  );
}

