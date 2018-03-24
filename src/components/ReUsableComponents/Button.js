import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const Button  = ({labelStyle, disabled, title, styleText, onPress, icon, backgroundStyle, textInlineStyle, imageUri}) =>{

const imageURI_or_Text = (imageUri === undefined ? 
    <Text style={[styles.text , textInlineStyle]} > {icon} </Text>
    : <Icon name={imageUri} size={30} color='red' /> )

    return (
       <TouchableOpacity onPress={onPress} disabled={disabled} >
            <View style={[styles.container, backgroundStyle ]} >
               <View style={[labelStyle]} >
               <Text style={[styles.text , textInlineStyle]} >{title} </Text>
               </View>
                {imageURI_or_Text}
            </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        width: 200,
        margin: 10,
        backgroundColor: '#60FEF7', //bacgroundColor
        // borderColor: '#3A76FB', // if no backgroudn Color - can use just border
        // borderWidth: 5,         // if no backgroudn Color - can use just border
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowOffset: {
            height: 5,
            width: 2
        }, 
        shadowColor: 'black', 
        shadowOpacity: 0.5,
        shadowRadius: 1
    }, 
    text: {
        
    }
})

export { Button }