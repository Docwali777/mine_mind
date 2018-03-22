export const SUBMIT_JOURNAL_ENTRY = (journalEntry) =>{
    return {
        type: 'SUBMIT_JOURNAL_ENTRY',
        payload: journalEntry
    }
} 

export const ALL_JOURNAL_ENTRIES = () =>{
    return{
        type: 'ALL_JOURNAL_ENTRIES'
    }
}
