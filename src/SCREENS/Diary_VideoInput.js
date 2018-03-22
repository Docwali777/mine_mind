import React, { Component } from 'react'


import { View, Text, StyleSheet } from 'react-native'

class Diary_VideoInput extends Component{

    render(){
        return (
            <View style={styles.container} >
                <Text>  VIDEO </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    }
})

export default Diary_VideoInput