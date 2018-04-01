import axios from 'axios'

const HOST_URL = 'http://10.0.0.7:3000' //http://10.0.0.7:3000/

export const USER_LOGIN = ({username, password}) =>{
    console.log(username, password)
 return dispatch =>{
  axios.post(`${HOST_URL}/login`, {username, password})
    .then(res =>{
        console.log(res.data.user.diaries)
     dispatch({
         type: 'USER_LOGIN',
         payload: res.data
     })
    }).catch(e =>{
        console.log('Error------> Unauthorized', e)
        dispatch({
            type: 'ERROR_LOGGING_IN',
            payload: e
        })
    })
 }
}