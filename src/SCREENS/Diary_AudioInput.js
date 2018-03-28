// 
import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  PermissionsAndroid,
  Dimensions
} from 'react-native';

import Sound from 'react-native-sound';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

import { Button, TextInputField, LabelForTextInput } from '../components/ReUsableComponents'
import renderTabsFunction from '../SCREENS/TABS/FunctionToRenderTabs'

//redux actions
import { connect } from 'react-redux'
import { SUBMIT_JOURNAL_ENTRY } from '../REDUX/REDUX_ACTIONS/diaries'

class Diary_AudioInput extends Component{

    state = {
        currentTime: 0.0,
        recording: false,
        paused: false,
        stoppedRecording: false,
        finished: false,
        audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
        hasPermission: undefined,
        audioFile: '', 
        title: '', 
        important: false

      };
  
      prepareRecordingPath(audioPath){
        AudioRecorder.prepareRecordingAtPath(audioPath, {
          SampleRate: 22050,
          Channels: 1,
          AudioQuality: "Low",
          AudioEncoding: "aac",
          AudioEncodingBitRate: 32000
        });
      }
  
      componentDidMount() {
        this._checkPermission().then((hasPermission) => {
          this.setState({ hasPermission });
  
          if (!hasPermission) return;
  
          this.prepareRecordingPath(this.state.audioPath);
  
          AudioRecorder.onProgress = (data) => {
            this.setState({currentTime: Math.floor(data.currentTime)});
          };
  
          AudioRecorder.onFinished = (data) => {
            // Android callback comes in the form of a promise instead.
            if (Platform.OS === 'ios') {
                this.setState({audioFile: data.audioFileURL})
              this._finishRecording(data.status === "OK", data.audioFileURL);
            }
          };
        });
      }
  
      _checkPermission() {
        if (Platform.OS !== 'android') {
          return Promise.resolve(true);
        }
  
        const rationale = {
          'title': 'Microphone Permission',
          'message': 'AudioExample needs access to your microphone so you can record audio.'
        };
  
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
          .then((result) => {
            console.log('Permission result:', result);
            return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
          });
      }
  
      _renderButton(title, onPress, active) {
        var style = (active) ? styles.activeButtonText : styles.buttonText;
  
        return (
          <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={style}>
              {title}
            </Text>
          </TouchableHighlight>
        );
      }
  
      _renderPauseButton(onPress, active) {
        var style = (active) ? styles.activeButtonText : styles.buttonText;
        var title = this.state.paused ? "RESUME" : "PAUSE";
        return (
          <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={style}>
              {title}
            </Text>
          </TouchableHighlight>
        );
      }
  
      async _pause() {
        if (!this.state.recording) {
          console.warn('Can\'t pause, not recording!');
          return;
        }
  
        try {
          const filePath = await AudioRecorder.pauseRecording();
          this.setState({paused: true});
        } catch (error) {
          console.error(error);
        }
      }
  
      async _resume() {
        if (!this.state.paused) {
          console.warn('Can\'t resume, not paused!');
          return;
        }
  
        try {
          await AudioRecorder.resumeRecording();
          this.setState({paused: false});
        } catch (error) {
          console.error(error);
        }
      }
  
      async _stop() {
        if (!this.state.recording) {
          console.warn('Can\'t stop, not recording!');
          return;
        }
  
        this.setState({stoppedRecording: true, recording: false, paused: false});
  
        try {
          const filePath = await AudioRecorder.stopRecording();
  
          if (Platform.OS === 'android') {
            this._finishRecording(true, filePath);
          }
          return filePath;
        } catch (error) {
          console.error(error);
        }
      }
  
      async _play() {
        if (this.state.recording) {
          await this._stop();
        }
  
        // These timeouts are a hacky workaround for some issues with react-native-sound.
        // See https://github.com/zmxv/react-native-sound/issues/89.
        setTimeout(() => {
          var sound = new Sound(this.state.audioPath, '', (error) => {
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
  
      async _record() {
        if (this.state.recording) {
          console.warn('Already recording!');
          return;
        }
  
        if (!this.state.hasPermission) {
          console.warn('Can\'t record, no permission granted!');
          return;
        }
  
        if(this.state.stoppedRecording){
          this.prepareRecordingPath(this.state.audioPath);
        }
  
        this.setState({recording: true, paused: false});
  
        try {
          const filePath = await AudioRecorder.startRecording();
        } catch (error) {
          return;
        }
      }
  
      _finishRecording(didSucceed, filePath) {
        this.setState({ finished: didSucceed });
        console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
      }

      submitVoiceRecordingHeandler = () =>{

        renderTabsFunction()

        this.props.SUBMIT_JOURNAL_ENTRY({
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
            title: this.state.title,
            audioFile: this.state.audioFile,
            icon: 'ios-mic', 
            color: '#FFA100', 
            emotion: this.props.text,
            uri: this.props.uri, 
            key: Math.random(),
            visble: true, 
            important: this.state.important
        })
      }
  
      render() {
          
  
        return (
          <View style={styles.container}>


            <View style={styles.labelAndTextInputContainer} >
              <View style={styles.label} >
              <LabelForTextInput textStyle={{color: 'white', fontWeight: '900'}}  >Title</LabelForTextInput>
              </View>

              <View style={styles.textInput} >
                <TextInputField
                    placeholder={'Enter title / theme'}
                    value={this.state.title}
                    onChangeText={title => this.setState({title})}
                    placeholderTextColor= 'black'
                    style={{marginLeft: 10}}
                />
              </View>
           
            </View>

            <View style={styles.controls}>
              {this._renderButton("RECORD", () => {this._record()}, this.state.recording )}
              {this._renderButton("PLAY", () => {this._play()} )}
              {this._renderButton("STOP", () => {this._stop()} )}
              {/* {this._renderButton("PAUSE", () => {this._pause()} )} */}
              {this._renderPauseButton(() => {this.state.paused ? this._resume() : this._pause()})}
              <Text style={styles.progressText}>{this.state.currentTime}s</Text>
            </View>
          <View style={styles.buttonContainer} >
          
          <Button 
              disabled={this.state.title.length > 0 && this.state.audioFile !== '' ?
                  false : 
                  true } 
                
                  backgroundStyle={{backgroundColor: this.state.title.length > 0 && this.state.audioFile !== '' ?
                   '#732D4A' : 
                   'gray'}} 
                    
              title={'Submit'} onPress={this.submitVoiceRecordingHeandler} />
          </View>
           
          </View>
        );
      }
    }
  
    var styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#2b608a",
        alignItems: 'center'
      },
      controls: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5,
      },
      progressText: {
        paddingTop: 50,
        fontSize: 50,
        color: "#fff"
      },
      button: {
        padding: 20
      },
      disabledButtonText: {
        color: '#eee'
      },
      buttonText: {
        fontSize: 20,
        color: "#fff"
      },
      activeButtonText: {
        fontSize: 20,
        color: "#B81F00"
      }, 
      labelAndTextInputContainer: {
        flexDirection: 'row', 
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
      textInput: {
        flex: 3, 
        justifyContent: 'center', 
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
      buttonContainer: {
        flex: 1,
        alignItems: 'center'
      }
  
    });
      


export default connect(null, {
    SUBMIT_JOURNAL_ENTRY
})(Diary_AudioInput)