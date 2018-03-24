import { Navigation } from 'react-native-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

export default () =>{
   Promise.all([
       Icon.getImageSource('ios-person', 50, 'red'), 
       Icon.getImageSource('ios-add', 30, 'blue'), 
       Icon.getImageSource('ios-bookmark', 30, 'black')
   ]).then(image =>{
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: 'All_Diary_Entries', 
                icon: image[2],
                title: 'Journal Entries',
                label: 'All Entries', 

                
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
        ], 
        tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
            tabBarButtonColor: 'white', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
            tabBarSelectedButtonColor: '#00FD4F', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
            tabBarBackgroundColor: '#000', // optional, change the background color of the tab bar
            initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
          }
    })
   })
}