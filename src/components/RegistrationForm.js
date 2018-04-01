import React, { Component } from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { LabelForTextInput, TextInputField, Button } from '../components/ReUsableComponents'


class RegistrationForm extends Component{

    state= {
        username: '',
        password: '', 
        confirmPassword: '', 
        error: ''
    }

    render(){
            return(
                <View style={styles.container}>
                   <LabelForTextInput>Registration</LabelForTextInput>
                   <Button 
                        title='Already Registered? Login'
                        backgroundStyle={{backgroundColor: '#5500FF', height: 30}}
                        textInlineStyle={{color: 'white', fontWeight: '700'}}
                        onPress={this.props.registerNewUSer}
                    />
                 <View style={styles.labelAndInputContainer} >
                
                <View style={styles.label} >
                <LabelForTextInput>Email</LabelForTextInput>
                </View>
                    
                    <View style={styles.textInput} > 
                    <TextInputField
                        placeholder='Email@username.com'
                        label='Email'
                        value={this.state.username}
                        onChangeText={username => this.setState({username}) }
                        multiline
                        allowFontScaling
                        autoCapitalize={'none'}
                    />
                    </View>
                 </View>
    
               <View style={styles.labelAndInputContainer}>
              <View style={styles.label} >
                 <LabelForTextInput>Password</LabelForTextInput>
              </View>
                   
                <View style={styles.textInput}>
                    <TextInputField
                        placeholder='Password'
                        label='Password'
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                        />
                </View>
                
    
               </View>


                 <View style={styles.labelAndInputContainer}>
              <View style={styles.label} >
                 <LabelForTextInput>Confirm Password</LabelForTextInput>
              </View>
                   
                <View style={styles.textInput}>
                    <TextInputField
                        placeholder='Confirm Password'
                        // label='CPassword'
                        onChangeText={confirmPassword => this.setState({confirmPassword})}
                        secureTextEntry={true}
                        />
                </View>
                
    
               </View>

          <Text>  {this.state.error}</Text>
                    <Button 
                        title='Submit' 
                        textInlineStyle={{fontWeight: '700'}} 
                        onPress={this.registerUser} />
    
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1
    }, 
    labelAndInputContainer: {
        flexDirection: 'row', 
        borderColor: '#EB658B',
        borderWidth: 4,
        width: '90%', 
        marginTop: 15,
        borderRadius: 10, 
        height: 50
    }, 
    label: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRightColor: '#EB658B',
        borderRightWidth: 4
    }, 
    textInput: {
        flex: 2,
        justifyContent: 'center', 
        // borderLeftColor: 'black',
        // borderLeftWidth: 1,
       marginLeft: 15,
        width: '90%'
    }
})


export default RegistrationForm