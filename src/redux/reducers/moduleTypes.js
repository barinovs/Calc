import { SET_MODULE_TYPES } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case SET_MODULE_TYPES:
            return {...state, ...action.moduleTypes } 
        default:
            return state
    }

}
