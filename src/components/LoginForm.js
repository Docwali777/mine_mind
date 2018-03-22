import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { TextInputField, Button } from './ReUsableComponents'

//
import rendertabsFunction from '../SCREENS/TABS/FunctionToRenderTabs'

class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

renderTabs = () =>{
    rendertabsFunction()
}
    render(){
        return(
            <View style={styles.container}>
                <TextInputField
                    placeholder='Username@email.com'
                    label='Username'
                    value={this.state.username}
                    onChangeText={username => this.setState({username}) }
                />

                <TextInputField
                    placeholder='Password'
                    label='Password '
                    onChangeText={password => this.setState({password})}
                />

                <Button title='Login' onPress={this.renderTabs} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default LoginForm