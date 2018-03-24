import React, { Component } from 'react'

import { View, Text , StyleSheet, Button, AsyncStorage} from 'react-native'

import ProfilePicContainer from '../../components/ProfilePicContainer'

class Profile extends Component {

async deleteStorage (){
        try {
          await AsyncStorage.removeItem('journalStorage')
          console.log('it worked')
           
        } catch(e){
            console.log(e)
        }

    }

    render(){
        return(
            <View style={styles.container} >
                <Button title='delete storage' onPress={this.deleteStorage} />
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