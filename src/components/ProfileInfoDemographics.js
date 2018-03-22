
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import { LabelForTextInput } from './ReUsableComponents'

const ProfileInfoDemographics  = (props) =>{
console.log(props.style)
    return (
        <View style={[styles.contanier, {...props.style}]} >
        <LabelForTextInput>{props.children}</LabelForTextInput>
        <LabelForTextInput>{props.info}</LabelForTextInput>
    </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flexDirection: 'row', 
        width: '100%'
    }
})

export default ProfileInfoDemographics