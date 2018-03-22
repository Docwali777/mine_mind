import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-picker'



import ProfileInfoDemographics from './ProfileInfoDemographics'

class  ProfilePicContainer extends Component{
    state = {
        image: false
    }
    addProfilePic = () =>{
            ImagePicker.showImagePicker({title: 'Choose Photo for Profile'}, res =>{
                if(res.didCancel){
                    alert('Photo option cencelled')
                } else if (res.error){
                    alert(res.error)
                } else {
                    this.setState({
                        image: { uri: res.uri}
                    })
                }
            })
    }

    render(){
let ProfilePic = (
    <View style={styles.profilePicture}>
    <Icon name='ios-add' size={50} />
    <Text>Add Profile Pic</Text>
</View>
)
if(this.state.image){
  ProfilePic =   <Image style={styles.profilePicture} source={this.state.image} />
}
        return (

            <View style={styles.container}>
                
                <TouchableOpacity onPress={this.addProfilePic} >
                  {ProfilePic}
                </TouchableOpacity>
    
                <View style={styles.profileInfo} >
                    
                    <View style={styles.demoInfo} >
                       <View style={styles.demoLabel}>
                            <Text>Name</Text>
                       </View>
                        
                        <View style={styles.personalInfo} >
                            <Text>Wali Gauvin</Text>
                        </View>
                    </View>
    
                    {/*  */}
                    <View style={styles.demoInfo} >
                       <View style={styles.demoLabel}>
                            <Text>Location</Text>
                       </View>
                        
                        <View style={styles.personalInfo} >
                            <Text>Annandale, Virginia</Text>
                        </View>
                    </View>
    
                     <View style={styles.demoInfo} >
                       <View style={styles.demoLabel}>
                            <Text style={styles.demoLabel} >Age</Text>
                       </View>
                        
                        <View style={styles.personalInfo} >
                            <Text>40</Text>
                        </View>
                    </View>
    
    
                </View>
    
    
    </View>
        )
    }

    
}


const styles = StyleSheet.create({
    container: {
        borderColor: 'black', 
        borderWidth: 1, 
        height: Dimensions.get('window').height * 0.8,
        margin: 10, 
        flexDirection: 'row',
        borderRadius: 20
    }, 
    profilePicture: {
        height: 100, 
        width: 100,
        borderColor: 'black', 
        borderWidth: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        margin: 5,
        borderRadius: 20
    }, 
    profileInfo: {
        margin: 5,
        // borderColor: 'black', 
        // borderWidth: 1,
        height: 80, 
        width: '60%', 

    }, 
    profileDemo: {
        // flexDirection: 'row', 
    }, 
    demoInfo: {
        flexDirection: 'row', 
        marginBottom: 5
    }, 
    demoLabel: {
        width: 70
    }, 
    personalInfo: {
        // borderBottomColor: 'black',
        // borderBottomWidth: 1
    }
})

export default ProfilePicContainer 