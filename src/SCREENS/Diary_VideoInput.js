import React, { Component } from 'react'
import { connect } from 'react-redux'

//redux
import { SUBMIT_JOURNAL_ENTRY } from '../REDUX/REDUX_ACTIONS/diaries'

//renderTabs function
import renderTabsFunction from './TABS/FunctionToRenderTabs'

import { View, Text, StyleSheet, Dimensions } from 'react-native'

import ImagePicker from 'react-native-image-picker'
import Video from 'react-native-video'

import { Button, TextInputField, LabelForTextInput } from '../components/ReUsableComponents'

class Diary_VideoInput extends Component{

    state = {
        videoUrl: '', 
        title: ''
    }

    takeVideo = () =>{

const options = {
    mediaType: 'video',
    cameraType: 'front',
    videoQuality: 'medium',
    durationLimit: 120, 
    takePhotoButtonTitle: 'Record Journal Video',
    chooseFromLibraryButtonTitle: 'Choose Video from Library'
}

       ImagePicker.showImagePicker(options, res =>{

        if(res.didCancel){
           return  alert('User Cancelled Recording')
        }
        else if(res.error){
           return console.lof(response.error)
        }
        else{
         
            let videoUrl = { uri: res.uri}
            this.setState({videoUrl})
        }
       })
    } 

    vidoePreview = (video) =>{
            switch(video){
                case '':
                return (
                    // <View style={styles.dummyText} >
                        <Text>Record a video</Text>
                    // </View>
                )

                default: 
                    return (
                    <Video 
                            source={this.state.videoUrl == '' ? {uri: ''} : { uri: this.state.videoUrl.uri } }
                            style={styles.image}
                        />)
            }
    }

submitVideo = () =>{
    
    renderTabsFunction()

    this.props.SUBMIT_JOURNAL_ENTRY({
        date: new Date().toDateString(),
        time: new Date().toLocaleTimeString(),
        title: this.state.title,
        icon: 'ios-videocam', 
        color: '#FF008A', 
        emotion: this.props.text,
        uri: this.props.uri, 
        key: Math.random(),
        visible: true,
        videoUrl: this.state.videoUrl
    })
}

    render(){
        
        return (
            <View style={styles.container} >
               <View style={styles.textContainer} >

               
           
                        <View style={styles.labelText} >
                        <LabelForTextInput>Video Title</LabelForTextInput>
                        </View>
                        
                        <View style={styles.inputFieldContainer} >
                        <TextInputField
                        placeholder= 'Vidoe title'
                        style={styles.inputField}
                        onChangeText={title => this.setState({title})}

                             />
                        </View>
                
               </View>
   
             
               <View style={styles.videoDisplayContainer} >
               {this.vidoePreview(this.state.videoUrl)}
               </View>
       
             <View style={styles.buttonContainer} >
             {
                  this.state.videoUrl !== '' ?
                  <Button 
                    title='Submit' 
                    onPress={this.submitVideo} 
                   
                    /> :
                  <Button 
                            title='Record Video'
                             onPress={this.takeVideo}
                             />
              }
             </View>
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
    textContainer: {  //contain labe and textinput
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }, 
    labelText: {
        flex: 1, 
        alignItems: 'center'
    },
    inputFieldContainer: {
        flex: 2, 
        alignItems: 'center',
        // borderBottomColor: 'black',
        // borderColor: 'black', 
        // borderWidth: 1,
        justifyContent: 'center',
        height: 40,
        width: Dimensions.get('window').width * 0.9,
        borderColor: 'black', 
        borderWidth: 2,
        borderRadius: 20
    },
    inputField: {
        // borderColor: '#FFEFD9', 
        // borderWidth: 1,
        // height: '30%',
        // width: '80%',
        width: Dimensions.get('window').width * 0.65,
        // borderRadius: 10, 
        margin: 0, 
        alignItems: 'flex-start',
       
        
    },
    videoDisplayContainer: {
        padding: 20, 
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        width: '100%'
    },
    image: {
        width: '100%', 
        height: '80%',
        // flex: 1
       
    }, 
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})


export default connect(null, {
    SUBMIT_JOURNAL_ENTRY
})(Diary_VideoInput)