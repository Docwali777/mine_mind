import React from 'react' 
import Icon from 'react-native-vector-icons/Ionicons'
 
 const EMOJIS = [
    {
        emotion: 'Happy', 
        uri: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1480481056'
    }, 
    {
        emotion: 'Anguish',
        uri: 'https://www.thesun.co.uk/wp-content/uploads/2017/01/emoji-4jpg-js285773928.jpg?strip=all&w=933'
    },
    {
        emotion: 'Sad',
        uri: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_large.png?v=1480481019'
    }, 
    {
        emotion: 'Teary Eyed',
        uri: 'https://i.pinimg.com/originals/3c/5e/e1/3c5ee1dd17525da65aad786ce357eb3a.jpg'
    }, 
    {
        emotion: 'Worried',
        uri: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/worried-face_1f61f.png'
    }
]

const DiariesObject = [
    {
        backgroundStyle: {backgroundColor: 'white'},
        title: 'Write',
        icon: (<Icon name='ios-clipboard' size={30} color='#FFA100' />),
        screen: 'Diary_WritingInput'
        
    },
    {
        backgroundStyle: {backgroundColor: 'white'},
        title: 'Voice' ,
        icon: (<Icon name='ios-mic' size={30} color={'#4900E1'} />),
        screen: 'Diary_AudioInput'
    },
    {
        backgroundStyle: {backgroundColor: 'white'}, 
        title: 'Video', 
        icon: (<Icon name='ios-videocam' size={30} color='#FF008A' />),
        screen: 'Diary_VideoInput'
    }
]

export  { EMOJIS, DiariesObject }