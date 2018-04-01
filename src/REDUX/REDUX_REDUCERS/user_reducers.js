export const UserReducer = (state = null, action) =>{
    switch(action.payload){
        case 'USER_LOGIN':
        return action.payload

        default: 
            return state
    }
}