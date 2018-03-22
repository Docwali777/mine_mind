import { combineReducers } from 'redux'

import { diariesReducer } from './diaries_reducers'


export default combineReducers({
  diaries: diariesReducer
})