import React, { Component } from 'react'

import { View, Text , StyleSheet, Button, AsyncStorage} from 'react-native'

import ProfilePicContainer from '../../components/ProfilePicContainer'

class Profile extends Component {

    render(){
        return(
            <View style={styles.container} >
            
       
                <View style={styles.cardContainer} >
                
                <ProfilePicContainer />
                
                </View>

               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
       flex: 1
    }, 
    cardContainer: {
        
    }
})


export default Profile