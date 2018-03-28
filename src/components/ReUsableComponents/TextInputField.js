import React from 'react';
import { View, TextInput } from 'react-native';

import { LabelForTextInput } from './index'

const TextInputField = (props) =>{
    return(
           <View >
           
              <TextInput
           style={[styles.inputFiled, props.style]}
           {...props}
   
           />
    
           </View>
    )
}



export { TextInputField}