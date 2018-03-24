import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//REDUX
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers  from './src/REDUX/REDUX_REDUCERS/index'

const store = createStore(reducers, applyMiddleware(thunk))
console.log('STORE', store.getState())
//Screns
import LoginScreen from './src/SCREENS/LoginScreen'
import Diary_WritingInput from './src/SCREENS/Diary_WritingInput'
import Diary_AudioInput from './src/SCREENS/Diary_AudioInput'
import Diary_VideoInput from './src/SCREENS/Diary_VideoInput'

//TABS
import Profile from './src/SCREENS/TABS/Profile'
import START_NEW_JOURNAL_ENTRY from './src/SCREENS/TABS/START_NEW_JOURNAL_ENTRY'
import All_Diary_Entries from './src/SCREENS/TABS/All_Diary_Entries'
import Selected_Diary_Entry from './src/SCREENS/TABS/Selected_Diary_Entry'

//Modal
import DiaryModalView from './src/SCREENS/TABS/DiaryModalView'

import { Navigation } from 'react-native-navigation'

Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider)
Navigation.registerComponent('Profile', () =>Profile)
Navigation.registerComponent('START_NEW_JOURNAL_ENTRY', ()=> START_NEW_JOURNAL_ENTRY)
Navigation.registerComponent('All_Diary_Entries', ()=> All_Diary_Entries, store, Provider)
Navigation.registerComponent('Selected_Diary_Entry', ()=> Selected_Diary_Entry, store, Provider)

Navigation.registerComponent('DiaryModalView', ()=> DiaryModalView)
Navigation.registerComponent('Diary_WritingInput', () => Diary_WritingInput, store, Provider)
Navigation.registerComponent('Diary_AudioInput', () => Diary_AudioInput, store, Provider)
Navigation.registerComponent('Diary_VideoInput', ()=>Diary_VideoInput, store, Provider)

Navigation.startSingleScreenApp({
  screen: {
    screen:'LoginScreen',
    title: 'Mine Voice Mine Mind'
  }
})