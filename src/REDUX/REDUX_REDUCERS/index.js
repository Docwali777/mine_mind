import { combineReducers } from 'redux'

import { diariesReducer } from './diaries_reducers'
import {  UserReducer } from './user_reducers'

export default combineReducers({
  diaries: diariesReducer, 
  user: UserReducer
})