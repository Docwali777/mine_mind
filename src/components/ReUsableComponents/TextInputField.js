import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { LabelForTextInput } from './index'

const TextInputField = (props) =>{

    return(
           <View style={styles.container} >
           <LabelForTextInput>{props.label}</LabelForTextInput>
              <View>
              <TextInput
           style={[styles.inputFiled, props.style]}
           {...props}
   
           />
              </View>
           </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        // borderColor: 'black', 
        // borderWidth: 1,
        margin: 10, 
        // borderRadius: 30, 
        flexDirection: 'row',
        justifyContent: 'space-between',
         height: 40, 
    }, 
    inputFiled: {
        width: 200, 
        marginLeft: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1, 
        paddingRight: 5
    }
})


export { TextInputField}