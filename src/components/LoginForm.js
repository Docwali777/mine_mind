import React, { Component } from 'react';
import firebase from 'firebase'


import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { TextInputField, Button, LabelForTextInput } from './ReUsableComponents'


import rendertabsFunction from '../SCREENS/TABS/FunctionToRenderTabs'



class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: ''
    }

    componentWillMount(){
       
          
    }

   

registerUser = async() =>{
    // const { email, password } = this.state

    // try{
    //     const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
    //  console.log(user)
     return   rendertabsFunction()
    // }catch(e){
    //    return this.setState({error: e.message})
    // }
   

}
    render(){
        return(
            <View style={styles.container}>
             
             <View style={styles.labelAndInputContainer} >
            
            <View style={styles.label} >
            <LabelForTextInput>Email</LabelForTextInput>
            </View>
                
                <View style={styles.textInput} > 
                <TextInputField
                    placeholder='Email@email.com'
                    label='Email'
                    value={this.state.email}
                    onChangeText={email => this.setState({email}) }
                    multiline
                    allowFontScaling
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
                <Button title='Login' onPress={this.registerUser} />

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

export default LoginForm