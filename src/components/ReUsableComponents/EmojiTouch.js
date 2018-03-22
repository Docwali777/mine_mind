import React from 'react'

import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native'

const EmojiTouch  = ({uri, text, onPress}) =>{
  



    return(
        <View >
        <TouchableOpacity style={styles.container} onPress={onPress}  >
            
            <Image style={styles.emojiImages}  source={{uri}} />
            <Text> {text} </Text>
            
        </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
            alignItems: 'center',
            justifyContent: 'center', 
            // borderColor: 'black',
            // borderWidth: 2, 
            margin: 5
    },
    emojiImages:{
        height: 70, 
        width: 70, 
        padding: 5
    }
})

export {EmojiTouch}