import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';

import firebase from 'firebase'

import LoginInForm from '../components/LoginForm'


class LoginScreen extends Component{
state = {
  imageUrl: '',
  videoUrl: ''
}
  componentWillMount(){


    var config = {
        apiKey: "AIzaSyAKQCXTH98zNEx9iob5oEhSijlgprYe168",
        authDomain: "dgheart-46a42.firebaseapp.com",
        databaseURL: "https://dgheart-46a42.firebaseio.com",
        projectId: "dgheart-46a42",
        storageBucket: "dgheart-46a42.appspot.com",
        messagingSenderId: "618550476162"
      };
      firebase.initializeApp(config);
}

clear = async() =>{
  try {
    AsyncStorage.removeItem('journalStorage')
  } catch(e){return console.log(e)}
}




render(){
  return (
    <View style={styles.container}>
   <LoginInForm /> 

  </View>
  )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });


  export default LoginScreen