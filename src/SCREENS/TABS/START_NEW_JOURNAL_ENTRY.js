import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { Button, EmojiTouch } from '../../components/ReUsableComponents'

import {EMOJIS}  from '../../EMOJIS'

import Icon from 'react-native-vector-icons/Ionicons'

class START_NEW_JOURNAL_ENTRY extends Component {

    state = {
        isDisplayed: true
    }




showModalView = (key) =>{
const emoji = EMOJIS.find((e, i) =>{
    return i === key
})

 Promise.all([
    Icon.getImageSource('ios-close', 30)
 ]).then(icon =>{
    this.props.navigator.showModal({
        screen: 'DiaryModalView', 
        passProps: {
           text: emoji.emotion,
           uri: emoji.uri
        },
        navigatorButtons: {
            leftButtons: [
                {
                    icon: icon[0],
                    id: 'close_modal_view'
                }
            ]
        }
    })
 })
 this.setState({isDisplayed: !this.state.isDisplayed})
}


    showDiaryEntryMode = () =>{
        this.setState({isDisplayed: !this.state.isDisplayed})
    }

    render(){

        const emojis = EMOJIS.map((emoji, i)=>{
            return (
                <EmojiTouch key={i} uri={emoji.uri} text={emoji.emotion}  onPress={() => this.showModalView(i)} />
            )
        })
        return(
            <View style={styles.container} >
                <Button title='Add Entry '  />
                <View style={[]} >
                    <View style={styles.diaryEntryContainer} >
                        {/* <EmojiTouch onPress={this.showModalView} uri='https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1480481056' text='Happy' />
                        <EmojiTouch uri='https://www.thesun.co.uk/wp-content/uploads/2017/01/emoji-4jpg-js285773928.jpg?strip=all&w=933' text='Anguish' /> */}
                        {/* <EmojiTouch uri='https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_large.png?v=1480481019' text='Sad' /> */}
                        {/* <EmojiTouch uri='https://i.pinimg.com/originals/3c/5e/e1/3c5ee1dd17525da65aad786ce357eb3a.jpg' text='Teary Eyed' />  */}
                {emojis}
                    </View>

                   
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        
    }, 
    diaryEntryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center', 
    }
})


export default START_NEW_JOURNAL_ENTRY