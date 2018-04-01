import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text , Image, StyleSheet } from 'react-native'

import { Button } from '../../components/ReUsableComponents'

import Icon from 'react-native-vector-icons/Ionicons'

import Sound from 'react-native-sound';

import VideoPlayer from 'react-native-video-player'

class Selected_Diary_Entry extends Component{
constructor(props){
    super(props)
    
    this.props.navigator.setOnNavigatorEvent(this.closeSelectedModal)
}




closeSelectedModal = (e) =>{
e.id === 'close_single_diary_entry_view' ?
       this.props.navigator.dismissModal() :
       false

}

 _playAudioFile = async () => {
   
    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {

        
      var sound = new Sound(this.props.journalProps.audioFile, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
  }

    render(){

        const { color, date, emotion, icon, text, title, time, uri, audioFile, videoUrl} = this.props.journalProps
        return (
            <View style={styles.container} >
                <View style={styles.dateAndTimeContainer} >
                <Text> Submitted on {date} at {time} </Text>
                </View>

                <View style={styles.imageAndEmotionsContainer} >
                    <Image source={{uri}} style={styles.image} />
                    <Text style={styles.emotionText} > {emotion} </Text>
                
                </View>
                
                
              {icon === 'ios-clipboard' ? (
                <View style={styles.journalContainer} >
                <View style={styles.jounalTitleContinaer} >
                <Text style={styles.journalTitle} >Journay Entry</Text>
                </View>
                    <Text> {text} </Text>
                </View>
              ) : null
              }

              
                {icon === 'ios-mic' ? <Button title={'play'} onPress={this._playAudioFile} imageUri='ios-play' /> : null}
              
                {/* {icon === 'ios-videocam' ? <Button title='Play Video' onPress={this.playVideo} imageUri='ios-play' />  : null} */}

                {videoUrl !== undefined ? (
                   <View style={styles.videoContainer}>
                   <VideoPlayer
                        // videoWidth={'100%'}
                        // videoHeight={'100%'}
                        ref={r => this.player = r}
                        video={videoUrl}
                        loop={false}
                        pauseOnPress
                        disableFullscreen

                    />
             
                   </View>
                ) : null}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1, 
       
    }, 
    dateAndTimeContainer: {
        alignItems: 'center',
        margin: 10,
        borderColor: '#732D4A',
        borderWidth: 1,
        borderRadius: 20, 
        height: 50,
        justifyContent: 'center', 
        flex: 1
    },
    imageAndEmotionsContainer: {
        marginTop: 20, 
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: 100, 
        height: 100, 
        marginBottom: 5
    }, 
    emotionText: {
        fontSize: 20,
        fontWeight: '500'
    },
    journalContainer: {
        marginTop: 15, 
        alignItems: 'center', 
        flex: 3
    }, 
    jounalTitleContinaer: {
        margin: 20, 
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    journalTitle: {
        fontSize: 17, 

    }, 
    videoContainer: {
        width: '100%',
        height: '100%', 
        flex: 3
    }
})



export default Selected_Diary_Entry