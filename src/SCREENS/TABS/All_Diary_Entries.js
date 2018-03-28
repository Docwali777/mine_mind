import React, { Component } from 'react'

import { connect } from 'react-redux'
import { ALL_JOURNAL_ENTRIES, SELECT_ENTRY } from '../../REDUX/REDUX_ACTIONS/diaries'



import { FlatList, View, Text , StyleSheet, AsyncStorage} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import ProfilePicContainer from '../../components/ProfilePicContainer'
import ListViewOfJournalEntries from '../../components/ListViewOfJournalEntries'

import {Button } from '../../components/ReUsableComponents'

class All_Diary_Entries extends Component {

componentWillMount(){
    this.props.ALL_JOURNAL_ENTRIES()
}


viewIndividualDiaryEntry = (key) =>{
const journalProps = this.props.diaries.find((entry, i) =>{
    return entry.key === key
})

  Promise.all([
        Icon.getImageSource('ios-close', 30)
  ]).then(icon =>{
    this.props.navigator.showModal({
        screen: 'Selected_Diary_Entry', 
        title: journalProps.title,
        passProps: {
            journalProps: {...journalProps}
        },
        navigatorButtons: {
            leftButtons: [
                {
                    icon: icon[0], 
                    id: 'close_single_diary_entry_view'
                }
            ]
        }
    })
  })
}

clearAllDiaries = async() =>{
    try {

    } catch(e){  return alert()}
}

    render(){


        return(
     
       
       <FlatList 
            style={styles.container}
            data={this.props.diaries}
            renderItem={({item}) =>{
                let entry = item
                
                return (
                    <ListViewOfJournalEntries 
                        key={entry.key} 
                        {...entry} 
                        onPress={() =>this.viewIndividualDiaryEntry(entry.key)} 
                          
                        />
                )
            } }
            
            
            />

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
const mapStateToProps = state =>{
    return {
        diaries: state.diaries
    }
}

export default connect(mapStateToProps, { 
    ALL_JOURNAL_ENTRIES, SELECT_ENTRY
})(All_Diary_Entries)