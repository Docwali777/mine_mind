const Initial_State = [ ]

export function diariesReducer(state = Initial_State, action){ 
    switch(action.type){
        case 'ALL_JOURNAL_ENTRIES': 
            return [...state]

        case 'SUBMIT_JOURNAL_ENTRY': 
        return [
            ...state,
            action.payload
        ]

        default:    
            return state
    }
}