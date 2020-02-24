import { CH_MODULE_TYPE } from  '../actions'

const initialState = {
    moduleType: "1",
    screenW: 9,
    screenH: 3,
    controlType: 'USB',
    controller: 'inside',
    maker: 'onbon',
    dt: false,
    dv: false,
    dl: false,
    video: false,
    executionType: 1
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CH_MODULE_TYPE:
            return {
                ...state, moduleType: action.moduleType
            }
            console.log("==SB==", state);
        default:
            return state;
    }

}
