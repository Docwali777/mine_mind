import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';


const  LabelForTextInput  = (props) =>{
    return (
        <View style={[styles.label, {...props.style}]}>
                <Text>{props.children}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    label: {
        alignItems: 'center',
        // borderRightWidth: 1,
        // borderRightColor: 'black', 
        paddingRight: 20,
        paddingLeft: 10
    }
})

export { LabelForTextInput}