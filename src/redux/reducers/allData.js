import { CH_MODULE_TYPE, CH_SCREEN_H, CH_SCREEN_W, CH_TYPE_OF_CONTROL } from  '../actions'

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
        case CH_SCREEN_H:
            return {
                ...state, screenH: action.height
            }
        case CH_SCREEN_W:
            return {
                ...state, screenW: action.width
            }
        case CH_TYPE_OF_CONTROL:
            return {
                ...state, typeOfControl: action.typeOfControl
            }
        default:
            return state;
    }

}
