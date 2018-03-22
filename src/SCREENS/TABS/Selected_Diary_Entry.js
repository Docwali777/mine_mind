import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text , Image, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

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

    render(){

        const { color, date, emotion, icon, text, title, time, uri} = this.props.journalProps
        return (
            <View style={styles.container} >
                <View style={styles.dateAndTimeContainer} >
                <Text> Submitted on {date} at {time} </Text>
                </View>

                <View style={styles.imageAndEmotionsContainer} >
                    <Image source={{uri}} style={styles.image} />
                    <Text style={styles.emotionText} > {emotion} </Text>
                
                </View>
                
                
                <View style={styles.journalContainer} >
                <View style={styles.jounalTitleContinaer} >
                <Text style={styles.journalTitle} >Journay Entry</Text>
                </View>
                    <Text> {text} </Text>
                </View>
        
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
        justifyContent: 'center'
    },
    imageAndEmotionsContainer: {
        marginTop: 20, 
        alignItems: 'center',
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
        alignItems: 'center'
    }, 
    jounalTitleContinaer: {
        margin: 20, 
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    journalTitle: {
        fontSize: 17, 

    }
})



export default Selected_Diary_Entry