import { combineReducers } from 'redux'
// import ads from './ads'
// import adQueries from './adQueries'
// import filter from './filter'
// import prices from './prices'
import allData from './allData'
import moduleTypes from './moduleTypes'

const rootReducer = combineReducers({ allData, moduleTypes })

export default rootReducer
