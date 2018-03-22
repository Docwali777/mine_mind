import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Button  = ({labelStyle, disabled, title, styleText, onPress, icon, backgroundStyle, textInlineStyle}) =>{

    return (
       <TouchableOpacity onPress={onPress} disabled={disabled} >
            <View style={[styles.container, backgroundStyle ]} >
               <View style={[labelStyle]} >
               <Text style={[styles.text , textInlineStyle]} >{title} </Text>
               </View>
                <Text style={[styles.text , textInlineStyle]} > {icon} </Text>
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