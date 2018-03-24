import {  AsyncStorage } from 'react-native'


export const SUBMIT_JOURNAL_ENTRY = (journalEntry) =>{
    return dispatch =>{

         AsyncStorage.getItem('journalStorage')
         .then(data =>{
            
        let added =  JSON.parse(data)
        added.push(journalEntry)
        console.log('ADDED______', added)
        AsyncStorage.setItem('journalStorage', JSON.stringify(added))
         })

        

        dispatch({
            type: 'SUBMIT_JOURNAL_ENTRY',
            payload: journalEntry
        })
    }

        

    // return {
    //     type: 'SUBMIT_JOURNAL_ENTRY',
    //     payload: journalEntry
    // }
} 

export const ALL_JOURNAL_ENTRIES = () =>{
   

    return  async dispatch =>{
        let journalStorage = []
     
        //Erase end
      const data = await AsyncStorage.getItem('journalStorage')
        

                if(data){
                   console.log('GET_ALL_DATA',JSON.parse(data))
                   
                   dispatch( {
                    type: 'ALL_JOURNAL_ENTRIES',
                    payload:  JSON.parse(data)
                })
                       
                       


                } else {
                    console.log('created')
                    let journals = []
                    // journals.push({})
                    AsyncStorage.setItem('journalStorage', JSON.stringify(journals))
                }
            
   }
}
