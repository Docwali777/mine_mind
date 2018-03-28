import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet , Image } from 'react-native'

import { Button } from '../../components/ReUsableComponents'
import { DiariesObject } from '../../EMOJIS'



class DiaryModalView extends Component{

    constructor(props){
        super(props)
       this.props.navigator.setOnNavigatorEvent(this.closeModal)
    }

closeModal = (e) =>{
    if(e.type === 'NavBarButtonPress' && e.id === 'close_modal_view'){
        this.props.navigator.dismissModal()
    }
}

openJournalEntrySelectedView = (screen) =>{
  this.props.navigator.push({
      screen,
     passProps: {
         text: this.props.text, 
         uri: this.props.uri
     }
    })
}

render(){

const RecordingTypes =  DiariesObject.map((button, i) =>{
    return(
        <Button 
            key={i}
            backgroundStyle={button.backgroundStyle}
            title={button.title}
            icon={button.icon}
            onPress={() =>this.openJournalEntrySelectedView(button.screen)}
          />
    )
})
    return (
        <View style={styles.container} >
            <View style={styles.timeAndEmojiContainer} >
                <Text style={styles.timeText} > Journal Entry Created:  </Text>
                <Text> {new Date().toDateString() }  </Text>
                <Text>  {new Date().toLocaleTimeString() } </Text>
           

            <Image style={styles.emojiImages} source={{uri: this.props.uri}} />
            <Text> {this.props.text} </Text>
        </View>   
        { RecordingTypes }
           

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
    timeAndEmojiContainer: {
        marginBottom: 30,
        alignItems: 'center', 
        borderBottomColor: 'black',
        borderBottomWidth: 1, 
        paddingBottom: 30,

    },
    timeText: {
        fontSize: 20
    },
    emojiImages:{
        height: 70, 
        width: 70, 
        padding: 5,
        marginBottom: 10, 
        marginTop:  20
    }
})




export default DiaryModalView




 {/* <Button 
                backgroundStyle={{backgroundColor: 'white'}} 
                // textInlineStyle={{color: '#FFA100'}} 
             
                title={'Type'} 
                icon={(<Icon name='ios-clipboard' size={30} color='#FFA100' />)} 
                />
            <Button 
                backgroundStyle={{backgroundColor: 'white'}} 
                // textInlineStyle={{color: '#4900E1'}} 
                onPress={this.voiceRecorder}
                title={'Voice'} 
                icon={(<Icon name='ios-mic' size={30} color={'#4900E1'} />)} />
            <Button 
                backgroundStyle={{backgroundColor: 'white'}} 
                textInlineStyle={{color: 'black'}} title={'Type'} 
                title={'Video'} 
                icon={(<Icon name='ios-videocam' size={30} color='#FF008A' />)} />
         */}
     