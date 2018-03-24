import React, { Component } from 'react'

import { connect } from 'react-redux'

//Actions - redux
import {SUBMIT_JOURNAL_ENTRY } from '../REDUX/REDUX_ACTIONS/diaries'

import { ImageBackground, View, Text, StyleSheet, TextInput, Dimensions, AsyncStorage  } from 'react-native'

import { Button, TextInputField } from '../components/ReUsableComponents'

import renderTabsFunction from './TABS/FunctionToRenderTabs'

import backgroundDiaryImage from '../../images/background_for_writing_journal_entry.jpeg'
class Diary_WritingInput extends Component{
    state = {
        text: '', 
        title: ''
    }

    onSubmitJournalText = (text) =>{

        

       renderTabsFunction()

        this.props.SUBMIT_JOURNAL_ENTRY({
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
            text: this.state.text,
            title: this.state.title,
            icon: 'ios-clipboard', 
            color: '#FFA100', 
            emotion: this.props.text,
            uri: this.props.uri, 
            key: Math.random()
        })
        
    }
   
    render(){
        return (
            <ImageBackground source={backgroundDiaryImage} style={styles.container}  >
               <View style={styles.container} >

               
                <TextInputField
                    placeholder={'Enter title / theme'}
                    value={this.state.title}
                    onChangeText={title => this.setState({title})}
                    style={{backgroundColor: 'white', width: 200, height: 40}}
                    label={'Title'}
                    labelStyle={{backgroundColor: 'white'}}
                />
               

                <TextInput 
                    placeholder={'Your thoughts?'}
                    placeholderTextColor='black'
                    value={this.state.text}
                    style={styles.inputField}
                    multiline
                    onChangeText={text => this.setState({text}) }

                />
                <Button 
                    disabled={this.state.text.trim() === '' || this.state.title.trim() === '' ? true : false}
                    backgroundStyle={{backgroundColor: this.state.text.length > 0 && this.state.title.length > 0 ? '#732D4A' : 'gray'}} 
                    onPress={this.onSubmitJournalText}
                    textInlineStyle={{color: 'white', fontWeight: '900'}}
                    title='Submit' />
                    
               </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center', 
        flex: 1

    },

    titleContainer: {
        backgroundColor: 'white'

    },
    inputField: {
        borderColor: '#FFEFD9', 
        borderWidth: 5,
        height: '50%',
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 10, 
        padding: 10, 
        margin: 20
    }
})

export default connect(null, { 
    SUBMIT_JOURNAL_ENTRY
} )(Diary_WritingInput)