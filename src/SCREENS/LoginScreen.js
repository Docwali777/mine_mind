import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';

import { LabelForTextInput } from '../components/ReUsableComponents'

import firebase from 'firebase'

import LoginInForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'

import { firebaseConfig } from '../../keys'

class LoginScreen extends Component{
state = {
  registerNewUSer: false
}



  componentWillMount(){
// this.clear()

   
      firebase.initializeApp(firebaseConfig);
}

clear = async() =>{
  try {
    AsyncStorage.removeItem('journalStorage')
  } catch(e){return console.log(e)}
}


registerNewUserHandler = () =>{
  this.setState({
    registerNewUSer: !this.state.registerNewUSer
  })
}

render(){
  return (
    <View style={styles.container}>
     
   {this.state.registerNewUSer !== true ?
    <LoginInForm registerNewUSer={this.registerNewUserHandler } /> :
    <RegistrationForm registerNewUSer={this.registerNewUserHandler} />
     }

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