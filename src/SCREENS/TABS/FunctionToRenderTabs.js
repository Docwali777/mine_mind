import { Navigation } from 'react-native-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

export default () =>{
   Promise.all([
       Icon.getImageSource('ios-person', 50), 
       Icon.getImageSource('ios-add', 30), 
       Icon.getImageSource('ios-bookmark', 30)
   ]).then(image =>{
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: 'All_Diary_Entries', 
                icon: image[2],
                title: 'Journal Entries',
                label: 'All Entries'
            },
            {
                screen: 'Profile',
                title: 'profile',
                label: 'Profile', 
                icon: image[0]
            }, 
            {
                screen: 'START_NEW_JOURNAL_ENTRY',
                title: 'Start New Journal Entry',
                label: 'Diaries', 
                icon: image[1]
            }
        ]
    })
   })
}