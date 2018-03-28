import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';


const  LabelForTextInput  = (props) =>{
    return (
        <View style={[styles.labelStyle, props.style]}>
                <Text style={[props.textStyle]} >{props.children}</Text>
    </View>
    )
}



export { LabelForTextInput}