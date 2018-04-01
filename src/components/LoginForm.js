import React, { Component } from 'react';
import firebase from 'firebase'
import axios from 'axios'
//redux
import { connect} from 'react-redux'
import { USER_LOGIN } from '../REDUX/REDUX_ACTIONS/user'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { TextInputField, Button, LabelForTextInput } from './ReUsableComponents'


import rendertabsFunction from '../SCREENS/TABS/FunctionToRenderTabs'



class LoginForm extends Component {

    state = {
        username: '',
        password: '',
        error: ''
    }

    componentWillMount(){
       
          
    }

   

registerUser = () =>{
    const { username, password} = this.state
  this.props.USER_LOGIN({
      username, password
  })
   

}
    render(){
        console.log(this.props)
        return(
            <View style={styles.container}>
               <LabelForTextInput>Login</LabelForTextInput>
               <Button 
                    title='Register New User'
                    backgroundStyle={{backgroundColor: '#FFD500', height: 30}}
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
      <Text>  {this.state.error}</Text>
                <Button title='Submit' textInlineStyle={{fontWeight: '700'}} onPress={this.registerUser} />

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

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

export default connect(null, {
    USER_LOGIN
})(LoginForm)