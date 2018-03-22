import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';


const  HorizontalCard   = (props) =>(
    <View style={styles.container}>
            <Text>Card</Text>
</View>
)


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200, 
        marginTop: 20
    }
})

export { HorizontalCard }