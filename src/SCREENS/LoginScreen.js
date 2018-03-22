import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginInForm from '../components/LoginForm'


const LoginScreen = () =>(
  <View style={styles.container}>
         <Text>Mine Voice - Mine Mind </Text>
        <LoginInForm />
       </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });


  export default LoginScreen