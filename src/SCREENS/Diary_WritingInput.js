import React, { Component } from 'react'

import { connect } from 'react-redux'

//Actions - redux
import {SUBMIT_JOURNAL_ENTRY } from '../REDUX/REDUX_ACTIONS/diaries'

import { ImageBackground, View, Text, StyleSheet, TextInput, Dimensions, AsyncStorage , TouchableOpacity } from 'react-native'

import { Button, TextInputField, LabelForTextInput } from '../components/ReUsableComponents'

import renderTabsFunction from './TABS/FunctionToRenderTabs'

import backgroundDiaryImage from '../../images/background_for_writing_journal_entry.jpeg'
class Diary_WritingInput extends Component{
    state = {
        text: '', 
        title: '',
        writingStarted: false,
        important: false
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
            key: Math.random(),
            visible: true, 
            important: this.state.important
        })
        
    }

    writingStarted = () =>{
        this.setState({
                writingStarted: true,
                text: ''
                })
    }
   
    render(){
        return (
            <ImageBackground source={backgroundDiaryImage} style={styles.container}  >
               <View style={styles.container} >

               
               <View style={styles.labelAndInputContainer} >
             
              <View  style={styles.label}>
                    <LabelForTextInput >Title</LabelForTextInput>
              </View>
              
              <View style={styles.textInput} >
              <TextInputField
                    placeholder={'Enter title / theme'}
                    placeholderTextColor='black'
                    value={this.state.title}
                    onChangeText={title => this.setState({title})}
                    style={styles.input}
                    maxLength={20}

                />
              </View>
               
               </View>
               

              <TouchableOpacity 
                style={styles.journalTextContainer}  
                onPress={this.writingStarted}
                    disabled={this.state.writingStarted}
             
                 >
              <TextInput 
                    placeholder={'Press here to start writing'}
                    placeholderTextColor='black'
                    value={this.state.text}
                    multiline
                    onChangeText={text => this.setState({text}) }
                    style={{margin: 10}}
                 
                />
              
              </TouchableOpacity> 
                
                <View style={styles.buttonContainer}>
                
                <Button 
                    disabled={this.state.text.trim() === '' || this.state.title.trim() === '' ? true : false}
                    backgroundStyle={{backgroundColor: this.state.text.length > 0 && this.state.title.length > 0 ? '#732D4A' : 'gray'}} 
                    onPress={this.onSubmitJournalText}
                    textInlineStyle={{color: 'white', fontWeight: '900'}}
                    title='Submit' />
                </View>
                    
               </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1

    },
    labelAndInputContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        flex: 0.5,
        marginTop: 10,
        width: Dimensions.get('window').width * 0.9
    },
    label: {
            alignItems: 'center',
            borderRightColor: 'white',
            borderRightWidth: 1,
            flex: 1, 
            backgroundColor: '#9E9E9E',
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center', 

    },
    textInput:{
            flex: 3, 
            justifyContent: 'center', 
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,

    },
    input: {
     
            width: '90%',
            marginLeft: 5
    },
    journalTextContainer:{
        flex: 3,
        marginTop: 15,
        borderColor: 'black',
        borderWidth: 3,
       width: Dimensions.get('window').width * 0.9
    },
    buttonContainer:{
        flex: 1
    }

})

export default connect(null, { 
    SUBMIT_JOURNAL_ENTRY
} )(Diary_WritingInput)