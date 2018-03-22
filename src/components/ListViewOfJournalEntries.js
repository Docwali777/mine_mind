import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {View, Text, StyleSheet , Image, TouchableOpacity, Dimensions } from 'react-native'

class ListViewOfJournalEntries extends Component{


    render(){
let journals = null
        if(this.props){
           journals =  (
               <View style={styles.container}>

                  <View style={styles.titleContainer} >
                <Text> {this.props.title} </Text>  
                </View>
               
               
               <View style={styles.emojiAndIconAndDateTimeContainer} >
                
            
               <View style={styles.titleAndProp} >
             
                <Image source={{uri: this.props.uri}} style={styles.image} />
               </View>
                <Icon name={this.props.icon} color={this.props.color} size={30} />
           
               <View style={styles.titleAndProp} >
               <Text> Time </Text>
               <Text> {this.props.date}  </Text>
               </View>

                <View style={styles.titleAndProp} >
               <Text> Date </Text>
               <Text> {this.props.time}  </Text>
               </View>
        
            </View>
               
               </View>
            )
        } else {
            return  journals = <Text>PLease enter journal entries</Text>
        }

        return (
            <TouchableOpacity onPress={this.props.onPress} >
            {journals}
           
              </TouchableOpacity>
          )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        // borderBottomColor: 'gray',
        // borderBottomWidth: 1,
        borderRadius: 20, 
        shadowRadius: 10, 
        shadowOffset: {
            width: 0, 
            height: 5
        },
        shadowOpacity: 0.3,
        shadowColor: 'black'
    },
    emojiAndIconAndDateTimeContainer: {
        height: 50,
        // borderBottomWidth: 1,
        // borderBottomColor: 'black',
        marginTop: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }, 
    titleContainer: {
        alignItems: 'center', 
        // borderBottomColor: 'gray',
        // borderBottomWidth: 1, 
        justifyContent: 'center'
    },
    image: {
        height: 30,
        width: 30
    }, 
    titleAndProp: {
        alignItems: 'center'
    }
})

export default ListViewOfJournalEntries